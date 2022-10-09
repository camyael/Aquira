import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import CartProd from "./Cart"

const CartView = (() => {
    const { cartItem, clear, PriceTotal } = useContext(CartContext)

    const createOrder = async() => {
        let dataItems = cartItem.map( item => ({
            id: item.id,
            price: item.price,
            title: item.title,
            quantify: item.count
        }))
        let order = {
            buyer: {
                name: 'Taylor Swift',
                phone: '117374654',
                email: 'tswift'
            },
            date: serverTimestamp(),
            items: dataItems,
            total: PriceTotal()
        }
        
        const orderRef = doc(collection(db, "orders"))
        await setDoc(orderRef, order);
        alert(`Su compra ha sido procesada. Su número de orden es ${orderRef.id}`)
        clear()

        cartItem.forEach(async(e) => {
            const itemRef = doc(db, "products", e.id);
            await updateDoc(itemRef, {
                stock: increment(-e.count)
            });
        });
    }

    return (
        <section className="Cart">
            <div className="yourCart">
                <img src="https://img.icons8.com/glyph-neue/64/3f4757/shopping-cart.png" alt="cart"/>
                <h2>Your Cart</h2>
            </div>
            <div className="cartList">
                <div className="cartList-Item">
                {
                    cartItem.length > 0
                    ? cartItem.map((prod) => (<CartProd key={prod.id} product={prod}/>))
                    :   <div className="cartList-Products">
                            <p>El carrito está vacío</p>
                            <Link to="/products">Ir a comprar</Link>
                        </div>
                }
                </div>

                {
                    cartItem.length > 0
                    && <div className="checkout">
                        <p>Total:</p>
                        <p>${PriceTotal()}</p>
                        <div>
                            <button onClick={createOrder} className="checkoutCart">Finalizar Compra</button>
                                <button onClick={clear} className="clearCart">Limpiar Carrito</button>
                            </div>
                        </div>
                }
               
            </div>
        </section>
        )
})

export default CartView;
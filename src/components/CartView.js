import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore"
import { db } from "../utils/firebaseConfig"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import CartProd from "./Cart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartView = (() => {
    const { cartItem, clear, PriceTotal } = useContext(CartContext)
    const [ contactName, setcontactName ] = useState('')
    const [ contactEmail, setcontactEmail ] = useState('')
    const [ contactTel, setcontactTel ] = useState('')

    const createOrder = async() => {
        let dataItems = cartItem.map( item => ({
            id: item.id,
            price: item.price,
            title: item.title,
            quantify: item.count
        }))
        let order = {
            buyer: {
                name: contactName,
                phone: contactTel,
                email: contactEmail
            },
            date: serverTimestamp(),
            items: dataItems,
            total: PriceTotal()
        }
        const notify = (order) => {
            toast.success(`Su compra ha sido procesada. Su número de orden es ${order}`, {
                position: "top-center",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        
        const orderRef = doc(collection(db, "orders"))
        await setDoc(orderRef, order);
        notify(orderRef.id)
        clear()

        cartItem.forEach(async(e) => {
            const itemRef = doc(db, "products", e.id);
            await updateDoc(itemRef, {
                stock: increment(-e.count)
            });
        });
    }

    const validateInfo = () => {
        if(contactEmail.includes('@')){
            createOrder()
        } else {
            toast.error('Por favor introduzca sus datos correctamente', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            })
        }
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
                            <div className="checkoutInfo">
                                <p className="total">Total</p>
                                <p>${PriceTotal()}</p>
                            </div>
                            <div>
                                <p>Datos de compra</p>
                                <input
                                type="text"
                                placeholder="Nombre Completo"
                                value={contactName}
                                onChange={ev => setcontactName(ev.target.value)} required></input>
                                <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={contactEmail}
                                onChange={ev => setcontactEmail(ev.target.value)} required></input>
                                <input
                                type="tel"
                                placeholder="Teléfono"
                                value={contactTel}
                                onChange={ev => setcontactTel(ev.target.value)}
                                pattern="[0-9]"                               
                                required></input>
                            </div>
                            <div>
                                <button type="submit" onClick={validateInfo} className="checkoutCart" >Finalizar Compra</button>
                                <button onClick={clear} className="clearCart">Limpiar Carrito</button>
                            </div>
                        </div>
                }
            </div>
            <ToastContainer/>
        </section>
        )
})

export default CartView;
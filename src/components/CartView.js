import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import CartProd from "./Cart"

const CartView = (() => {
    const { cartItem, clear, PriceTotal } = useContext(CartContext)

    console.log(cartItem)
    return (
        <section className="Cart">
            <div className="cartList">
                <h2>Your Cart</h2>
                {
                    cartItem.length > 0
                    ? cartItem.map((prod) => (<CartProd key={prod.id} product={prod}/>))
                    :   <div>
                            <p>El carrito está vacío</p>
                            <Link to="/products">Ir a comprar</Link>
                        </div>
                }
            </div>
            <div>
                <p>Total:</p>
                <p>${PriceTotal()}</p>
                <div>
                    <button>Finalizar Compra</button>
                </div>
                <div>
                    <button onClick={clear}>Limpiar Carrito</button>
                </div>
            </div>
        </section>
        )
})

export default CartView;
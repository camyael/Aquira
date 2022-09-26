import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartProd from "./Cart"

const CartView = (() => {
    const { cartItem, clear, totalPrice } = useContext(CartContext)

    console.log(cartItem)
    return (
        <section className="Cart">
            <div className="cartList">
                <h2>Your Cart</h2>
                {
                    cartItem.length > 0
                    ? cartItem.map((prod) => (<CartProd key={prod.id} product={prod}/>))
                    : <p>El carrito está vacío</p>
                }
            </div>
            <div>
                <p>Total:</p>
                <p>${totalPrice}</p>
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
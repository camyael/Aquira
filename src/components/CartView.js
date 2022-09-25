import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartProd from "./Cart"

const CartView = (() => {
    const { cartItem } = useContext(CartContext)

    return (
        <section className="Cart">
            <div className="cartList">
                <h2>Your Cart</h2>
                {
                    cartItem.length > 0
                    ? cartItem.map((prod) => (<CartProd product={prod}/>))
                    : <p>El carrito está vacío</p>
                }
            </div>
            <div>
                <p>subtotal</p>
                <p>$00000</p>
                <button>Finalizar Compra</button>
            </div>
        </section>
        )
})

export default CartView;
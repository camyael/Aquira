import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartProd from "./Cart"

const CartView = (() => {
    const { cartItem } = useContext(CartContext)

    return (
        <>

            {
                cartItem.length > 0
                ? cartItem.map((prod) => (<CartProd product={prod}/>))
                : <p>El carrito está vacío</p>
            }
            
        </>
        )
})

export default CartView;
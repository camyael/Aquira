import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cartItem, PriceCount } = useContext(CartContext)

    return(
        <div className="CardWidget">
            <img src="https://img.icons8.com/glyph-neue/64/3f4757/shopping-cart.png" alt="cart"/>
            {(cartItem.length > 0) && <span>{PriceCount()}</span>}
        </div>
    )
}

export default Cart;
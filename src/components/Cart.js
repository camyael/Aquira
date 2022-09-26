import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartProd = ({product}) => {

    const { removeItem } = useContext(CartContext)
    
    const [count, setCount] = useState(product.count)

    const addProduct = () => {
        if (count < product.stock) {
            setCount(product.count += 1)
        }
    }

    const deleteProduct = () => {
        if (count > 1) {
            setCount (product.count -= 1)
        }
    }

    return (
        <div className="Cart-Item">
            <div className="Cart-Product">
                <div>
                    <img src={product.pictureURL} alt="product"/>
                </div>
                <div>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <div className="controlsItem">
                        <button onClick={deleteProduct}>-</button>
                        <p>Cantidad: {product.count}</p>
                        <button onClick={addProduct}>+</button>
                    </div>
                    <p>Subtotal: ${product.price * product.count}</p>
                </div>
            </div>
            <div className="Cart-Delete" onClick={() => removeItem(product.id)}>
                <button onClick={() => removeItem(product.id)}>
                    <img src="https://img.icons8.com/ios/50/000000/delete-forever--v1.png" alt="delete"/>
                </button>
            </div>
        </div>
    )
}

export default CartProd;
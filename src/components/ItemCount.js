import React, { useState} from "react"

const ItemCount = ({ stock , onAdd}) => {

    const initial = 1
    const [count, setCount] = useState(initial)

    const addProduct = () => {
        if (count < stock) {
            setCount(count + initial)
        }
    }

    const deleteProduct = () => {
        if (count > 1) {
            setCount (count - 1)
        }
    }

    return (
        <div className="ItemCount">
            <div className="controlsItem">
                <button onClick={deleteProduct}>-</button>
                <p>{count}</p>
                <button onClick={addProduct}>+</button>
            </div>
            <div className="addTo">
                <button className="addToCart" onClick={() => onAdd(count)}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
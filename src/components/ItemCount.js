import React, { useState} from "react"

const ItemCount = ({ stock }) => {

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

    const addToCart = () => {
        alert(`Agregaste ${count} producto/s`)
    }

    return (
        <div className="ItemCount">
            <div className="controlsItem">
                <button onClick={deleteProduct}>-</button>
                <p>{count}</p>
                <button onClick={addProduct}>+</button>
            </div>
            <div className="addTo">
                <button className="addToCart" onClick={addToCart}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
import React, { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetail"
import productsOBJ from "../utils/Products"

const ItemDetailContainer = () => {
    const [productArray, setproductArray] = useState([])

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsOBJ[2])
            }, 2000)
        })
    }

    useEffect(() => {
        getItem()
        .then(response => setproductArray(response))
        .catch(() => console.log("Error"))
    })

    return (
        <div className="ItemDetail">
            <ItemDetail item={productArray} />
        </div>
    )
}

export default ItemDetailContainer
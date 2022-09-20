import React, { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetail"
import Products from "../utils/Products"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [productArray, setproductArray] = useState([])
    const { id } = useParams()

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products.find(item => item.id == id))
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
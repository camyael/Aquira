import React, { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetail"
import Products from "../utils/Products"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"

const ItemDetailContainer = () => {
    const [productArray, setproductArray] = useState([])
    const [Load, setLoad] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const getItem = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    setLoad(true)
                    // eslint-disable-next-line
                    resolve(Products.find(item => item.id == id)) 
                }, 1000)
            })
        }
    
        getItem()
            .then(response => {
                setproductArray(response)
                setLoad(false)
            })
            .catch(() => console.log("Error"))
    })

    if(Load) return (
        <div className="Loading">
            <Loading/> 
        </div>
    )

    return (
        <div className="ItemDetail">
            <ItemDetail item={productArray} />
        </div>
    )
}

export default ItemDetailContainer
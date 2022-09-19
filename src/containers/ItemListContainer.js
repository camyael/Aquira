import { useState, useEffect } from "react"
import Products from "../utils/Products"
import ItemList from "../components/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [productsArray, setproductsArray] = useState([])
    const { id } = useParams()

    const List = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products)
            }, 2000)
        })
    }

    const Category = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Products.filter(item => item.categoryID == id))
            }, 2000)
        })
    }

    useEffect(() => {
        if (id) {
            Category()
                .then(response => setproductsArray(response))
                .catch(() => console.log("Error"))
        } else {
            List()
                .then(response => setproductsArray(response))
                .catch(() => console.log("Error"))
        }
    }, [id])

    return (
        <div className="ItemList">
            <ItemList products={productsArray}/>
        </div>
    )
}

export default ItemListContainer
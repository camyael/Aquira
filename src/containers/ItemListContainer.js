import { useState, useEffect } from "react"
import Products from "../utils/Products"
import ItemList from "../components/ItemList"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"

const ItemListContainer = () => {

    const [productsArray, setproductsArray] = useState([])
    const [Load, setLoad] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const List = () => {
            return new Promise((resolve, reject) => {
                setLoad(true)
                setTimeout(() => {
                    resolve(Products)
                }, 2000)
            })
        }

        const Category = () => {
            return new Promise((resolve, reject) => {
                setLoad(true)
                setTimeout(() => {
                    // eslint-disable-next-line
                    resolve(Products.filter(item => item.categoryID == id))
                }, 2000)
            })
        }

        if (id) {
            Category()
                .then(response => {
                    setproductsArray(response)
                    setLoad(false)})
                .catch(() => console.log("Error"))
        } else {
            List()
                .then(response => {
                    setproductsArray(response)
                    setLoad(false)})
                .catch(() => console.log("Error"))
        }
    }, [id])


    if(Load) return (
        <div className="Loading">
            <Loading/> 
        </div>
    )

    return (
        <div className="ItemList">
            <ItemList products={productsArray}/>
        </div>
    )
}

export default ItemListContainer
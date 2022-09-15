import { useState, useEffect } from "react"
import productsOBJ from "../utils/Products"
import ItemList from "../components/ItemList"

const Products = () => {

    const [productsArray, setproductsArray] = useState([])

    const List = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productsOBJ)
            }, 2000)
        })
    }

    useEffect(() => {
        List()
            .then(response => setproductsArray(response))
            .catch(() => console.log("Error"))
    })

    return (
        <div className="ItemList">
            <ItemList products={productsArray}/>
        </div>
    )
}

export default Products
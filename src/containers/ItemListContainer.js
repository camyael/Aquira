import { useState, useEffect } from "react"
// import Products from "../utils/Products"
import ItemList from "../components/ItemList"
// import { useParams } from "react-router-dom"
// import Loading from "../components/Loading"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"

const ItemListContainer = () => {
    const [productsArray, setproductsArray] = useState([])

    useEffect (() => {
        const firestoreFetch = async() => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const data = querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))

            return data
        }
           firestoreFetch()
                   .then( result => console.log(result))
   }, [productsArray])

   // const [Load, setLoad] = useState(true)
   // const { id } = useParams()

    // useEffect(() => {
    //     const List = () => {
    //         return new Promise((resolve, reject) => {
    //             setLoad(true)
    //             setTimeout(() => {
    //                 resolve(Products)
    //             }, 2000)
    //         })
    //     }

    //     const Category = () => {
    //         return new Promise((resolve, reject) => {
    //             setLoad(true)
    //             setTimeout(() => {
    //                 // eslint-disable-next-line
    //                 resolve(Products.filter(item => item.categoryID == id))
    //             }, 2000)
    //         })
    //     }

    //     if (id) {
    //         Category()
    //             .then(response => {
    //                 setproductsArray(response)
    //                 setLoad(false)})
    //             .catch(() => console.log("Error"))
    //     } else {
    //         List()
    //             .then(response => {
    //                 setproductsArray(response)
    //                 setLoad(false)})
    //             .catch(() => console.log("Error"))
    //     }
    // }, [id])


    // if(Load) return (
    //     <div className="Loading">
    //         <Loading/> 
    //     </div>
    // )

    return (
        <div className="ItemList">
            <ItemList products={productsArray}/>
        </div>
   )
}

export default ItemListContainer
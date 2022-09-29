import { useState, useEffect } from "react"
<<<<<<< HEAD
import ItemList from "../components/ItemList"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import { collection, getDocs, query, where } from "firebase/firestore";
=======
// import Products from "../utils/Products"
import ItemList from "../components/ItemList"
// import { useParams } from "react-router-dom"
// import Loading from "../components/Loading"
import { collection, getDocs } from "firebase/firestore";
>>>>>>> 7b4557a87345381ba16bcdf5ec02a8b971b6d85d
import { db } from "../utils/firebaseConfig"

const ItemListContainer = () => {
    const [productsArray, setproductsArray] = useState([])
<<<<<<< HEAD
    const [Load, setLoad] = useState(false)
    const { id } = useParams()

    useEffect (() => {
        setLoad(true)
        const pedirDatos = async() => {
            let qry 
            if (id) {
                qry = query(collection(db, "products"), where('categoryID', '==', parseInt(id)))
            } else {
                qry = query(collection(db, "products"))
            }
            const querySnapshot = await getDocs(qry);
            const results = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            })); 
            return results
        }
        pedirDatos()
                .then(resolve => {
                    setproductsArray(resolve)
                    setLoad(false)
                })
    }, [id])  
=======

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

>>>>>>> 7b4557a87345381ba16bcdf5ec02a8b971b6d85d

    // if(Load) return (
    //     <div className="Loading">
    //         <Loading/> 
    //     </div>
    // )

<<<<<<< HEAD
     return (
         <div className="ItemList">
             <ItemList products={productsArray}/>
         </div>
    )
=======
    return (
        <div className="ItemList">
            <ItemList products={productsArray}/>
        </div>
   )
>>>>>>> 7b4557a87345381ba16bcdf5ec02a8b971b6d85d
}

export default ItemListContainer
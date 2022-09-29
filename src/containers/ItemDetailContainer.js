import React, { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"

const ItemDetailContainer = () => {
    const [productArray, setproductArray] = useState([])
    const [Load, setLoad] = useState(true)
    const { id } = useParams()

    // useEffect (() => {
    //     setLoad(true)
        
    //     const pedirDatos = async() => {
    //         let qry 
    //         if (id) {
    //             qry = query(collection(db, "products"), where('id', '==', parseInt(id)))
    //         } else {
    //             qry = query(collection(db, "products"))
    //         }
    //         const querySnapshot = await getDocs(qry);
    //         const results = querySnapshot.docs.find(item => item. id == parseInt(id)); 
    //         return results
    //     }
    //     pedirDatos()
    //             .then(resolve => {
    //                 setproductArray(resolve)
    //                 setLoad(false)
    //             })
    // }, [id])  


    

    return (
        <div className="ItemDetail">
            <ItemDetail item={productArray} />
        </div>
    )
}

export default ItemDetailContainer
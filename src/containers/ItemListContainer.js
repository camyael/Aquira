import { useState, useEffect } from "react"
import ItemList from "../components/ItemList"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../utils/firebaseConfig"

const ItemListContainer = () => {
    const [productsArray, setproductsArray] = useState([])
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
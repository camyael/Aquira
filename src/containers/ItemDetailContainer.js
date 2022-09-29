import React, { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetail"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import { doc, getDoc} from "firebase/firestore";
import { db } from "../utils/firebaseConfig"

const ItemDetailContainer = () => {
    const [productArray, setproductArray] = useState([])
    const [Load, setLoad] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        const pedirDatos = async () => {
            setLoad(true)
            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setproductArray(docSnap.data());
                setLoad(false)
            } else {
                setLoad(true)
            }  
        }

        pedirDatos()
        
    }, [id])

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
// import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

// <---- ITEM INVIDIVIDUAL ---->
const Item = ({product}) => {
    return (
        <div className="divItem">
            <div>
                <img src={product.pictureURL} alt="product"/>
            </div>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            
            <Link to={`/item/${product.id}`}><button className="itemVerMas">Ver más</button></Link>
        </div>
    )
}

export default Item
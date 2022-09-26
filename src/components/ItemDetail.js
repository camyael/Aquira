import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {

    const { addItem, IsInCart } = useContext(CartContext)

    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`);
    
        addItem(item, count)
    }

    return (
        <>
            <div className="pictureURL">
                <img src={item.pictureURL} alt="product"/>
            </div>
            <div className="ProductInfo">
                <h2 className="ItemTitle">{item.title}</h2>
                <h3 className="ItemDescription">{item.description}</h3>
                <h4 className="ItemPrice">${item.price}</h4>

                <div className="ProductStock">
                {
                    IsInCart(item.id)
                    ? <Link to="/cart"><button className="goToCart">Ir al Carrito</button></Link>
                    : <ItemCount stock={item.stock} onAdd={onAdd}/> 
                }
                </div>
            </div>
        </>
    )
};

export default ItemDetail
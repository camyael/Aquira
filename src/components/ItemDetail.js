import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item}) => {

    const { addItem, IsInCart } = useContext(CartContext)

    const notify = (count) => {
        toast(`Agregaste ${count} producto/s`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    const onAdd = (count) => {
        notify(count);
        addItem(item, count)
    }

    return (
        <>
            <ToastContainer />
            <div className="pictureURL">
                <img src={item.pictureURL} alt="product"/>
            </div>
            <div className="ProductInfo">
                <h2 className="ItemTitle">{item.title}</h2>
                <h3 className="ItemDescription">{item.description}</h3>
                <h4 className="ItemPrice">${item.price}</h4>

                {
                    item.stock > 0
                    ? <div className="ProductStock">
                        {
                            IsInCart(item.id)
                            ? <Link to="/cart"><button className="goToCart">Finalizar la compra</button></Link>
                            : <ItemCount stock={item.stock} onAdd={onAdd}/> 
                        }
                        <p>Stock: {item.stock}</p>
                        </div>
                    : <p className="noStock">No hay stock, siga <a href="/products">comprando</a>!</p>
                }
            </div>
        </>
    )
};

export default ItemDetail
import ItemCount from "./ItemCount"

// <---- ITEM INVIDIVIDUAL ---->
const Item = ({product}) => {
    return (
        <div className="catalogo_div">
            <img src={product.pictureURL} alt="product"/>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <ItemCount stock={product.stock}/>
        </div>
    )
}

export default Item
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return (
        <>
            <div className="pictureURL">
                <img src={item.pictureURL} alt="product"/>
            </div>
            <div className="ProductInfo">
                <h2 className="ItemTitle">{item.title}</h2>
                <h3 className="ItemDescription">{item.description}</h3>
                <h4 className="ItemPrice">{item.price}</h4>

                <div>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </>
    )
};

export default ItemDetail
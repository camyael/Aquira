import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return (
        <>
            <div>
                <img src={item.pictureURL} alt="product"/>
            </div>
            <div>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                <h4>{item.price}</h4>

                <div>
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </>
    )
};

export default ItemDetail
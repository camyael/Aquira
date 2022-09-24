const CartProd = ({product}) => {
    return (
        <div className="divItem">
            <div>
                <img src={product.pictureURL} alt="product"/>
            </div>
            <div>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
            </div>
        </div>
    )
}

export default CartProd;
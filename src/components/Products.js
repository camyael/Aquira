const Products = (props) => {
    return (
        <div className="catalogo_div">
            <h2>{props.producto}</h2>
            <p>{props.marca}</p>
            <p>Stock: {props.stock}</p>
        </div>
    )
}

export default Products
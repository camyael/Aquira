import ItemCount from "../components/ItemCount"

const Products = ({product, stock}) => {
    return (
        <div className="catalogo_div">
            <h2>{product}</h2>
            <ItemCount stock={stock}/>
        </div>
    )
}

export default Products
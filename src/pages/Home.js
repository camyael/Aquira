import { Link } from "react-router-dom";
import beauty from "../img/beauty.jpg";
import beauty1 from "../img/beauty1.jpg"
import product from "../img/product.jpg";
import product1 from "../img/product1.jpg";

const Home = () => {
    return (
        <>
            <section id="Home">
                <div>
                    <h2>Cuida tu piel</h2>
                    <Link to="/products"><button className="Shop-Now">Shop Now</button></Link>
                </div>           
            </section>

            <section id="Main">
                <div className="text">
                    <p>Bienvenido a <span>Aquira</span></p>
                </div>
                <div className="images">
                    <div className="images-1">
                        <img src={product} alt="products"/>
                        <img src={beauty} alt="girl"/>
                    </div>
                    <div className="images-2">
                        <img src={beauty1} alt="girl"/>
                        <img src={product1} alt="products"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
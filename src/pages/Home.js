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
                    <p>Cuidados para tu piel</p>
                    <Link to="/products"><button className="Shop-Now">Shop Now</button></Link>
                </div>           
            </section>

            <section id="Main">
                <div className="text">
                    <img src="https://img.icons8.com/external-victoruler-outline-victoruler/64/7f5539/external-skincare-beauty-cosmetics-victoruler-outline-victoruler.png" alt="icon"/>
                    <p>Aquira es una empresa importadora de productos para el cuidado de la piel y maquillaje.</p>
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
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <section id="Home">
                <div>
                    <h2>Cuida tu piel</h2>
                    <Link to="/products"><button className="Shop-Now">Shop Now</button></Link>
                </div>           
            </section>
        </>
    )
}

export default Home;
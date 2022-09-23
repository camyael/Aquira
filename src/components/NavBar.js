import Cart from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <header id="header">
                <h1>
                    <Link to="/">Beauty</Link>
                </h1>
                <div className="navbar">
                    <ul>
                        <li><Link to="/">Productos</Link></li>
                        <li><Link to="/category/2">Skincare</Link></li>
                        <li><Link to="/category/1">Maquillaje</Link></li>
                    </ul>
                </div>
                <Cart />
            </header>
        </>
    );
}

export default NavBar

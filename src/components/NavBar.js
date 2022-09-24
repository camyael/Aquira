import Cart from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <header id="header">
                <div className="logo">
                    <h1>
                        <Link to="/">Beauty</Link>
                    </h1>
                </div>
                <div className="navbar">
                    <ul>
                        <li><Link to="/products">Productos</Link></li>
                        <li><Link to="/category/2">Skincare</Link></li>
                        <li><Link to="/category/1">Maquillaje</Link></li>
                    </ul>
                </div>
                <div className="navbar">
                    <ul>
                        <li>Nosotros</li>
                        <li><Cart /></li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default NavBar

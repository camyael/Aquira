import Card from "./CardWidget"

const NavBar = () => {
    return (
        <>
            <header id="header">
                <h1>
                    Beauty
                </h1>
                <div className="navbar">
                    <ul>
                        <li>Productos</li>
                        <li>Skincare</li>
                        <li>Maquillaje</li>
                    </ul>
                </div>
                <Card />
            </header>
        </>
    );
}

export default NavBar

import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';

function App() {
  return (
    <>
      <NavBar />
      <section className="catalogo">
        <Products producto="Mascara de Pestaña" marca="Dior" stock="7"/>
        <Products producto="Delineador" marca="Maybelline" stock="20"/>
        <Products producto="Labial matte" marca="Maybelline" stock="10"/>
        <Products producto="Rubor" marca="Dior" stock="4"/>
      </section>
    </>
  );
}

export default App;

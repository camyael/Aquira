import './App.css';
import NavBar from './components/NavBar';
import Products from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <section className="catalogo">
        <Products producto="Mascara de Pestaña"/>
        <Products producto="Delineador"/>
        <Products producto="Labial matte"/>
        <Products producto="Rubor"/>
      </section>
    </>
  );
}

export default App;

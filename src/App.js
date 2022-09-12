import './App.css';
import NavBar from './components/NavBar';
import Products from './containers/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <section className="catalogo">
        <Products product="Mascara de Pestaña" stock={2}/>
        <Products product="Delineador" stock={4}/>
        <Products product="Labial matte" stock={5}/>
        <Products product="Rubor" stock={8}/>
      </section>
    </>
  );
}

export default App;

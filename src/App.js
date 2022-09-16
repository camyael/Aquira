import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
// import Products from './containers/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      {/* <Products /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;

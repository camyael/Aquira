import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartView from './components/CartView'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from './containers/ItemListContainer';
import CartContextProvider from './context/CartContext';
import Home from './pages/Home'

function App() {
  return (
    <>
     <CartContextProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/" element={<ItemListContainer />}/> */}
            <Route path="/category/:id" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<CartView/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;

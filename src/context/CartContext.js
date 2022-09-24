import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ( ({children})  => {
    // ESTADO
    const [ cartItem, setcartItem ] = useState([])

    const addItem = (product) => {
        // no pushear
        setcartItem([...cartItem, product])
    }

    return(
        <CartContext.Provider value={{
            cartItem,
            addItem}}>
            {children}
        </CartContext.Provider>
    )
})

export default CartContextProvider;

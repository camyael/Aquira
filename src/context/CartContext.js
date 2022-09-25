import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ( ({children})  => {
    // ESTADO
    const [ cartItem, setcartItem ] = useState([])

    const addItem = (product) => {
        // no pushear
        setcartItem([...cartItem, product])
    }

    const removeItem = (id) => {
        const remove = cartItem.filter((product) => product.id !== id);
        setcartItem(remove)
    }

    return(
        <CartContext.Provider value={{
            cartItem,
            addItem,
            removeItem}}>
            {children}
        </CartContext.Provider>
    )
})

export default CartContextProvider;

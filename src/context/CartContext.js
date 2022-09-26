import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ( ({children})  => {
    const [ cartItem, setcartItem ] = useState([])

    const addItem = (product, count) => {
        if(IsInCart(product.id)) {
            const index = cartItem.findIndex(item => item.product.id === product.id);
            cartItem[index].count = cartItem[index].count + count;
            setcartItem([...cartItem]);
        }
        
        else {
            setcartItem([...cartItem, { ...product, count}])
        }
    }

    const removeItem = (id) => {
        const remove = cartItem.filter((product) => product.id !== id);
        setcartItem(remove)
    }

    const clear = () => {
        setcartItem([])
    }

    const IsInCart = (id) => cartItem.some((product) => product.id === id);

    const PriceTotal = () => {
        return cartItem.reduce((acc, itemCart) => acc + (itemCart.price * itemCart.count), 0)
    }

    return(
        <CartContext.Provider value={{
            cartItem,
            addItem,
            removeItem,
            clear,
            IsInCart,
            PriceTotal}}>
            {children}
        </CartContext.Provider>
    )
})

export default CartContextProvider;

import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ( ({children})  => {
    const [ cartItem, setcartItem ] = useState([])
    const [ prodFirebase, setprodFirebase ] = useState()

    const addItem = (product, count) => {
        if(IsInCart(product.id)) {
            const index = cartItem.findIndex(item => item.item.id === product.id);
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

    const IsInCart = (id) => {
        return cartItem.some((product) => product.id === id);}

    const PriceTotal = () => {
        return cartItem.reduce((acc, prod) => acc + (prod.price * prod.count), 0)
    }

    const PriceCount = () => {
        return cartItem.reduce((acc, prod) => acc + prod.count, 0)
    }



    return(
        <CartContext.Provider value={{
            cartItem,
            addItem,
            removeItem,
            clear,
            IsInCart,
            PriceTotal,
            PriceCount,
            prodFirebase,
            setprodFirebase}}>
            {children}
        </CartContext.Provider>
    )
})

export default CartContextProvider;

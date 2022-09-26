import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ( ({children})  => {
    const [ cartItem, setcartItem ] = useState([])
    const [ totalPrice, setTotalPrice] = useState(0)

    const addItem = (product, count) => {
        if(IsInCart(product.id)) {
            const index = cartItem.findIndex(item => item.product.id === product.id);
            cartItem[index].count = cartItem[index].count + count;
            setcartItem([...cartItem]);
            
            const totalParcial = product.price * count
            setTotalPrice(totalPrice + totalParcial);
        }
        
        else {
            setcartItem([...cartItem, { ...product, count}])
        }
    }

    const removeItem = (id) => {
        const remove = cartItem.filter((product) => product.id !== id);
        console.log(remove)
        //setTotalPrice(totalPrice - (cart));
        setcartItem(remove)
    }

    const clear = () => {
        setcartItem([])
    }

    const IsInCart = (id) => cartItem.some((product) => product.id === id);

   

    return(
        <CartContext.Provider value={{
            cartItem,
            addItem,
            removeItem,
            clear,
            IsInCart,
            totalPrice}}>
            {children}
        </CartContext.Provider>
    )
})

export default CartContextProvider;

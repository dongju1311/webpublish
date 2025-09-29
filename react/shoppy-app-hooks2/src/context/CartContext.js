import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]); //장바구니 리스트
    const [cartCount, setCartCount] = useState(0); //장바구니 수량
    const [totalPrice, setTotalPrice] = useState(0); //장바구니 총금액

    return (
        <CartContext.Provider value={{cartList,setCartList,cartCount,setCartCount,totalPrice,setTotalPrice}}>
            {children}
        </CartContext.Provider>
    );
}
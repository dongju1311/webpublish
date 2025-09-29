import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { axiosData } from '../utils/dataFetch.js';
import { getTotalPrice, cartItemsAddInfo, cartItemsCheck } from '../utils/cart.js';


export function useCart() {
    const {cartCount,setCartCount,totalPrice,setTotalPrice,cartList,setCartList} = useContext(CartContext);
    //장바구니 아이템 추가
    const addCart = (cartItem) => { //<-- ProductDetail 쇼핑백 추가 이벤트 처리
        setCartList(cartItemsCheck(cartList, cartItem));
        setCartCount(cartCount+1);
    }
    //장바구니 출력
    const showCart = () => {
        const fetch = async() => {
            const jsonData = await axiosData("/data/products.json")
            setCartList(cartItemsAddInfo(jsonData,cartList));
            setTotalPrice(getTotalPrice(jsonData,cartList));
        }
        fetch();
    }
    //장바구니 수량 변경
    const updateCart = (cid, type) => {
        setCartList((cartList)=>{
            return cartList.map((item)=>
                item.cid === cid ? 
                type === "+" ? {...item, qty:item.qty+1}
                : item.qty > 1 ? {...item, qty:item.qty-1} : item
                : item
            );
        });
        //장바구니 변화에 따른 전체 금액 변경
        const findItem = cartList.find((item)=>item.cid === cid);
            type === "+" ? setTotalPrice(totalPrice - findItem.price)
                : findItem.qty > 1 ? setTotalPrice(totalPrice - findItem.price)
                : setTotalPrice(totalPrice);
        //header cartCount 변경
        type === "+" ? setCartCount(cartCount + 1)
            : cartCount > 1 ? setCartCount(cartCount - 1) :
            setCartCount(cartCount);
    };


    //장바구니 아이템 삭제
    const removeCart = (cid,qty,price) => {
        setTotalPrice(totalPrice-(qty * price));
        setCartList((cartList)=>{
            return cartList.filter(item => !(item.cid === cid))
        });
        setCartCount(cartCount - qty);
    }

    return {addCart, showCart, updateCart, removeCart}
}


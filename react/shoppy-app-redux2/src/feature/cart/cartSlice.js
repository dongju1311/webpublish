import { createSlice } from '@reduxjs/toolkit'
import { cartItemsAddInfo, cartItemsCheck } from '../../utils/cart.js';
import { updateCart } from './carAPI.js';

const initialState = {
  count: 0,
  list: [],
  totalPrice : 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem (state,action) {
      const{cartItem} = action.payload;
      state.list = cartItemsCheck(state.list, cartItem);
    },
    updateCartCount (state) {
      state.count = state.list.reduce((total,item)=>total + item.qty, 0);
    },
    updateTotalPrice (state) {
      state.totalPrice = state.list.reduce((total,item)=>total + (item.qty * item.price), 0);
    },
    showCartItem (state,action) {
      const {item} = action.payload;
      state.list = cartItemsAddInfo(item,state.list);
    },
    updateCartItem (state,action) {
      const {cid,type} = action.payload;
      state.list = state.list.map((item)=>
                item.cid === cid ? 
                type === "+" ? {...item, qty:item.qty+1}
                : item.qty > 1 ? {...item, qty:item.qty-1} : item
                : item
            );
   },
   removeCartItem (state,action) {
    const{cid} = action.payload;
    state.list = state.list.filter(item => !(item.cid === cid));
   }
  }
})

// Action creators are generated for each case reducer function
export const { addCartItem, updateCartCount, showCartItem, updateCartItem, updateTotalPrice, removeCartItem } = cartSlice.actions

export default cartSlice.reducer
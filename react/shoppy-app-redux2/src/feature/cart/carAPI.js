import { addCartItem, removeCartItem, showCartItem, updateCartCount, updateCartItem, updateTotalPrice} from "./cartSlice.js"
import { axiosData } from "../../utils/dataFetch.js";

export const addCart = (cartItem) => async(dispatch) => {
    dispatch(addCartItem({"cartItem" : cartItem}));
    dispatch(updateCartCount());
}

export const showCart = () => async(dispatch) => {
    const jsonData = await axiosData("/data/products.json")
    dispatch(showCartItem({"item" : jsonData}));
}

export const updateCart = (cid,type) => async(dispatch) => {
    dispatch(updateCartItem({"cid":cid, "type":type}))
    dispatch(updateCartCount());
    dispatch(updateTotalPrice());
}

export const removeCart = (cid) => async(dispatch) => {
    dispatch(removeCartItem({"cid":cid}));
    dispatch(updateTotalPrice());
    dispatch(updateCartCount());
} 
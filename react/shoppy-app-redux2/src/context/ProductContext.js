import { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [imgList, setImgList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [product, setProduct] = useState({});


    return(
        <ProductContext.Provider value={{product,setProduct,productList,setProductList,imgList,setImgList}} >
            {children}
        </ProductContext.Provider>
    );
}
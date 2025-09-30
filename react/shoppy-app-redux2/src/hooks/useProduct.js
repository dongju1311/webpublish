import React,{useContext} from 'react';
import { axiosData, groupByRows } from '../utils/dataFetch.js';
import { ProductContext } from '../context/ProductContext.js';

export function useProduct() {
    const {productList, setProductList, imgList, setImgList, product, setProduct} = useContext(ProductContext);
    const createProduct = (number) => {
        const load = async() => {
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setProductList(rows);
        }
        load();
    }
    const filterProduct = (pid) => {
        // ProductList가 2차원 배열이므로 flat() 함수를 이용하여 1차원 변경 후 filter 진행
        const [filterProduct] = productList.flat().filter((item) => item.pid === pid);
        setProduct(filterProduct); 
        setImgList(filterProduct.imgList);                
    }

    return {createProduct, filterProduct};
}
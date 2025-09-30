import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductAvatar } from './ProductAvatar.jsx';
import { fetchData, axiosData, groupByRows } from '../../utils/dataFetch.js';
import { ProductContext } from '../../context/ProductContext.js';
import { useProduct } from '../../hooks/useProduct.js';

export function ProductList() {
    // const [rows, setRows] = useState([]);
    const {createProduct} = useProduct();
    const {productList} = useContext(ProductContext);
    const [number, setNumber] = useState(3);
    useEffect(()=>{
        // const load = async() => {
        //     const jsonData = await axiosData("/data/products.json");
        //     const rows = groupByRows(jsonData, number);
        //     setRows(rows);
        // }
        // load();
        createProduct(number);
    },[number]);
    
    return (
        <div>
            {productList && productList.map((rowArray,idx)=>
                <div className='product-list' key={idx}>
                    {rowArray && rowArray.map((product,idx)=>
                        <Link to={`/products/${product.pid}`}>
                            <ProductAvatar img={product.image} key={idx}/>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}


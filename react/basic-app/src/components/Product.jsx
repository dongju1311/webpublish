import { useState, useEffect } from "react";

/**
 * 베스트 상품 컴포넌트
 */
export function BestProduct(){
    const [cartCount, setCartCount] = useState(0);
    const [bestProductList, setBestProductList] = useState([]);

    const handleCartCount = () => {
        setCartCount(cartCount + 1);
    }

    //컴포넌트 호출 시 데이터 로딩, 비동기 처리 --> useEffect Hooks 함수
    useEffect(()=>{
        // fetch("/data/best_products.json")
        // .then((response => response.json()))
        // .then((jsonData => setBestProductList(jsonData)))
        // .catch(error => console.log(error));
        const fetchData = async () => {
            const response = await fetch("/data/best_products.json");
            const jsonData = await response.json();
            setBestProductList(jsonData);
        }
        fetchData();
    },[]);
    return(
        <>
            <h2>베스트 상품 : 🛒({cartCount})</h2>
            <ul className="best-product">
                {bestProductList.map((product,index)=>
                    (index === 0) ?
                    <li><BestProductImage 
                        img={product.img}
                        style={{width:"600px",height:"700px"}}
                        rank={product.rank}
                        like={product.like}
                        cartCount={handleCartCount}/></li>
                    : <li><BestProductItem 
                                item={product}
                                cartCount={handleCartCount}/></li>
                )}
            </ul>
        </>
    );
}
/**
 * 베스트 상품 아이템 컴포넌트
 */
export function BestProductItem({item, cartCount}){
    return(
            <div>
                <BestProductImage 
                        img={item.img}
                        style={{width:"200px", height:"240px"}}
                        rank={item.rank}
                        like={item.like}
                        cartCount={cartCount}/>
                <BestProductContent
                        title={item.title}
                        sale={item.sale}
                        price={item.price}
                        like={item.like}/>
            </div>
    );
}

/**
 * 베스트 상품 컨텐츠 컴포넌트
 */
export function BestProductContent({title,sale,price,like}){
    return(
        <div className="best-product-content">
            <p className="best-product-content-title">{title}</p>
            <span className="best-product-content-sale">{sale}</span>
            <span className="best-product-content-price">{price}</span>
            {like? <span className="best-product-content-like">🤍</span>: ""}
        </div>
    );
}

/**
 * 베스트 상품 이미지 컴포넌트
 */
export function BestProductImage({img,style,rank,like, cartCount}){
    const handleAddCart = () => {
        cartCount();
    }
    return(
        <div className="best-product-img">
            <ProductImage img={img} style={style}/>
            <span className="best-product-img-no">{rank}</span>
            {like ? 
            <span className="best-product-img-like"
                            onClick={handleAddCart}>🛒</span>: "" }
        </div>
    );
}

/**
 * 상품 이미지 컴포넌트
 */
export function ProductImage({img, style}){
    const {width,height} = style;
    return(
        <img src={img}
            style={{width:width, height:height}}></img>
    );
}
import { Image } from "../commons/Images.jsx";
/**
 * 상품 이미지 컴포넌트
 */
export function ProductImage({img, style}){
    return(
        <Image img={img} 
               width={style.width} 
               height={style.height}/>
    );
}
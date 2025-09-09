/**
 * 아바타 이미지 생성 컴포넌트
 */
export function AvatarImage({img,style}){
    return(
            <img src={img} className={style}></img>
    );
}
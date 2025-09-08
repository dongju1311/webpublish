/**
 * 메뉴 컴포넌트
 */

export function Menu2({data}){
    const {title,href,color,bg} = data;
    return(
        <a href={href}
            className="menu"
            style={{color:color,background:bg}}>{title}</a>
    );
}
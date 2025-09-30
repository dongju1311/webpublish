
export function Menu({href, name, style, isIcon, icon, handleClick, type}) {
    return (
        <a  href={href}
            className={style}
            type={type}
            onClick={()=>{handleClick(type)}}>
            { isIcon ? icon : ""} {name}
        </a>
    );
}
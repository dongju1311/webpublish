export function MyButton({name, type, style, handleProps}){ //props = {name:"회원가입"} 구조분해할당!!!
    const handleClick = () => {
        console.log(`(자식)result-->`, name)
        handleProps(`버튼클릭--> ${name}`);
    }
    
    return(
        <button type={type}
                className={style}
                onClick={handleClick}
                >{name}</button>
    );
}
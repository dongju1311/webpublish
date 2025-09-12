
export function TextInput({item, handleChange, value}){
    const {type, name, msg} = item;
    return(
        <input  type={type}
                name={name}
                value={value}
                placeholder={msg}
                onChange={(e)=>{handleChange(e)}}/>
    );
}
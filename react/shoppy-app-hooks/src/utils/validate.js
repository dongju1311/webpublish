/**
 * Shoppy 로그인 폼 체크
 */
export const validateFormCheck = ({idRef,pwdRef,errors,setErrors}) => {
    if(idRef.current.value === ''){
        setErrors({...errors, id:'아이디를 입력해주세요'})
        idRef.current.focus();
        return false;
    } else if(pwdRef.current.value === "") {
        setErrors({...errors, pwd:'패스워드를 입력해주세요'})
        pwdRef.current.focus();
        return false;
    }
    return true;
}


/**
 * 로그인 폼 체크
 */
export function validateLoginCheck(refs, setMsg){
    //서버전송
    //validation check(유효성체크)
    if(refs.idRef.current.value===""){
        // alert("아이디를 입력해주세요");
        setMsg({id : "아이디를 입력해주세요"});
        // refs.msgIdRef.current.innerText = "아이디를 입력해주세요";
        refs.idRef.current.focus();
        return false;
    } else if(refs.passRef.current.value ===""){
        // alert("패스워드를 입력해주세요");
        // refs.msgPassRef.current.innerText = "패스워드를 입력해주세요";
        setMsg({pass: "패스워드를 입력해주세요"});
        refs.passRef.current.focus();
        return false;
    } return true;
}
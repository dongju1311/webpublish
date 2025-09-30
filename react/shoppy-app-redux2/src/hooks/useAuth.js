import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";

export function useAuth(){
    const {isLogin, setIsLogin} = useContext(AuthContext);

    const handleLogin = (userId) => {
        setIsLogin(!isLogin);
        const loginInfo = {
            "userId" : userId,
            "token" : "asdasd12354"
        }
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo)); //JSON 객체를 문자형태로 전환
    }
    const handelLogOut = () => {
        setIsLogin(!isLogin);
        localStorage.removeItem("loginInfo");
    }
    return{handleLogin,handelLogOut};
}
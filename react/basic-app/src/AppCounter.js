//부모
import { Counter } from "./components/Counter.jsx";
import { useState } from "react";
import './App.css';
// 자식 > 부모(누적합) > 자식(결과전송)
export default function App(){
    const [total,setTotal] = useState(0); //변수의 상태관리

    const click = (type) => { //자식 컴포넌트의 클릭이벤트 결과 가져오기
        if(type === "+") setTotal(total+1);
            else if(type === "-") setTotal(total-1);
            else if(type === 0) setTotal(0);
    }

    return(
        <>
            <h1>Counter</h1>
            <Counter click={click} total={total}/>
            <Counter click={click} total={total}/>
        </>
    );
}
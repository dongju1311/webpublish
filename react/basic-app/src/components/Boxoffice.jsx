import { useEffect, useRef, useState } from "react";
import { fetchKobisAPI, searchMoviePoster } from "../util/commonData.js";
import { BestProductImage } from "./shared/BestProductImage.jsx";
import { BestProductItem } from "./BestProduct.jsx";
import { BestProductContent } from "./shared/BestProductContent.jsx";

export function Boxoffice(){
    const [list, setList] = useState([]);
    const hasRun = useRef(false);
    useEffect(()=>{
        const fetchKobis = async() => {
            if(!hasRun.current){
                const kobis = await fetchKobisAPI("20250910");
                const mlist = kobis.boxOfficeResult.dailyBoxOfficeList;
                for(const movie of mlist){
                    if(movie.rank !== "10"){ //API는 무조건 문자열
                        const poster = await searchMoviePoster(movie.movieNm,movie.openDt);
                        const posterObj = {
                            "img": poster,
                            "rank": movie.rank,
                            "title":movie.movieNm,
                            "like":true,
                            "icon":"❤",
                            "style":{"width":"600px","height":"800px"},
                            "icon_style":{
                                        "bg":"red", 
                                        "color":"#fff",
                                        "radius":"0",
                                        "width":"40px",
                                        "height":"40px"
                                        }
                        };
                        setList(prev =>[...prev,posterObj]);
                    }
                }
            }
        fetchKobis();
        hasRun.current=true;
        }
    },[]);

    return(
        <>
            <h2>박스오피스</h2>
                <ul className="best-product">
                    {list.map((item,index)=>
                        (index === 0) ?
                        <li key={index}>
                            <BestProductImage 
                            img={item.img}
                            style={item.style}
                            rank={item.rank}
                            like={item.like}
                            icon={item.icon}
                            icon_style={item.icon_style}/>
                        </li>
                        : <li key={index}>
                            <BestProductItem 
                                item={item}/>
                        </li>
                    )}
                </ul>
        </>
    );
}
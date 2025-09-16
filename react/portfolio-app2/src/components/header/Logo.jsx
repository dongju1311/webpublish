import { AvartarImage } from "../base/Avatar.jsx";

export function Logo({img,name}) {
    return(
        <div className="header-logo">
            <AvartarImage img={img}
                          alt="headerlogo"
                          style="header-logo-img"/>
            <h1 className="header-logo-title">{name}</h1>
        </div>
    );
}
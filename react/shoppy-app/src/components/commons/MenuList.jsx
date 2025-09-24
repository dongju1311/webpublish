import { useState } from "react";
import { Menu } from "./Menu.jsx";

export function MenuList({menus, filterList}){
    const [active, setActive] = useState("all");

    const handleClick = (type) => {
        setActive(type);
        filterList(type);
    }

    return(
        <ul className="menu-list">
            {!menus || menus.map(menu=> //Strict Mode 상태에서 객체가 넘어올때 null값 체크를 위해 !menus || 를 넣는다
                <li className="menu-List-item">
                    <Menu href={menu.href}
                          name={menu.name}
                          isIcon={menu.isIcon}
                          icon={menu.icon}
                          type={menu.type}
                          style={active === menu.type ?
                            "support-content-menu support-active" : "support-content-menu"}
                          handleClick={handleClick}/>
                    {menu.isBorder ? <span className="menu-list-item-border"></span> : ""}
                </li>
            )}
        </ul>
    );
}
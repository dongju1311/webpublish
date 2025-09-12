import { Menu } from "../commons/Menu.jsx";

export function MenuList({menus}){
    

    return(
        <ul className="menu-list">
            {!menus || menus.map(menu=> //Strict Mode 상태에서 객체가 넘어올때 null값 체크를 위해 !menus || 를 넣는다
                <li className="menu-List-item">
                    <Menu href={menu.href}
                        name={menu.name}
                        style={menu.style}
                        isIcon={menu.isIcon}
                        icon={menu.icon}/>
                    {menu.isBorder ? <span className="menu-list-item-border"></span> : ""}
                </li>
            )}
        </ul>
    );
}
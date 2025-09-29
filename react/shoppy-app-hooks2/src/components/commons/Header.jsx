import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { GiShoppingCart } from 'react-icons/gi';
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext.js";
import { useAuth } from "../../hooks/useAuth.js";
import { AuthContext } from "../../context/AuthContext.js";


export function Header() {

   const {cartCount} = useContext(CartContext);
   const {handleLogOut} = useAuth();
   const {isLogin} = useContext(AuthContext);

    return(
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy</span>
                </Link>
                <nav className="header-right">
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <GiShoppingCart className='header-icons'/>
                        <span className="header-icons-cart">{cartCount}</span>
                    </Link>
                    {!isLogin && 
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                    }
                    {isLogin &&
                    <Link to="/signup">
                        <button type="button">Signup</button>
                    </Link>
                    }
                    <Link to="/support">
                        <button type="button">Support</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket}]=useStateValue();
    return (
        <nav className="header">
           <Link to="/">
            <img 
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" 
            alt="amazon_logo"/>
            </Link>

            <div className="searchBox">
            <input 
                type="text"
                className="searchBox_input"
                placeholder="Search items here"/>

                
            <SearchIcon className="searchBox_icon"/>
            
            </div>
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_options">
                    <span className="header_options_line1">Hello Aditya</span>
                    <span className="header_options_line2">Sign in</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_options">
                    <span className="header_options_line1">Returns</span>
                    <span className="header_options_line2">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_options">
                    <span className="header_options_line1">Your</span>
                    <span className="header_options_line2">Prime</span>
                    </div>
                </Link>
            </div>
                
            <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
            <ShoppingBasketIcon/>
    <span className="header_options_line2 header_basketCount">{basket?.length}</span>
            </div>
            </Link>

            {/*logo on the left->img
            searchbox
            3 links
            basket icon with number*/}
        </nav>
    )
}

export default Header

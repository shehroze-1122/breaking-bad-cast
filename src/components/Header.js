import React from 'react';
import logo from '../resources/logo.png' 
const Header = ()=>{
    return(
        <header>
            <img src={logo} alt='logo header' className="header mx-auto d-block"/>
        </header>

    );

}

export default Header;
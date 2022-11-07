import React from 'react';
import './Header.css';
import logo from '../../../src/images/Logo.svg';

const Header = () => {
     return (
          <div className="header">
               <img src={logo} alt="" />
               <div className="menu-ber">
                    <a href="/shop">SHOP</a>
                    <a href="/orders">ORDERS</a>
                    <a href="/inventory">INVENTORY</a>
                    <a href="/about">ABOUT</a>
               </div>
          </div>
     );
};

export default Header;
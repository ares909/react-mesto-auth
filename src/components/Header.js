import React from 'react';
import logo from "../blocks/header/images/logo.svg";

function Header() {
  return (
    <header className="header">
        <a href="#" className="header__logo-box hover" target="_blank">
          <img
            className="header__logo"
            src={logo}
            alt="лого"
          />
        </a>
      </header>
  );
}
  
export default Header;
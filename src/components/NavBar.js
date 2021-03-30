import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    function handleClick() {
        props.onChangeForm()
    }
    return (
        <nav className="header__menu">
          <NavLink onClick={handleClick} className={`header__menu-item hover ${props.signIn ? 'header__menu-item_hidden' : ''}`} to="/signup">Регистрация</NavLink>
          <NavLink onClick={handleClick} className={`header__menu-item hover ${props.signIn ? '' : 'header__menu-item_hidden'}`}  to="/signin">Войти</NavLink>
        </nav>
      );
}
export default NavBar;




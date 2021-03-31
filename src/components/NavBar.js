import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

function NavBar(props) {
  const location = useLocation();

  return (
    <nav className="header__menu">
      <NavLink
        onClick={props.onChangeForm}
        className={`header__menu-item hover ${
          location.pathname === "/signup" || location.pathname === "/"
            ? "header__menu-item_hidden"
            : ""
        }`}
        to="/signup"
      >
        Регистрация
      </NavLink>

      <NavLink
        onClick={props.onChangeForm}
        className={`header__menu-item hover ${
          location.pathname === "/signin" || location.pathname === "/"
            ? "header__menu-item_hidden"
            : ""
        }`}
        to="/signin"
      >
        Войти
      </NavLink>
      {location.pathname === "/" ? (
        <p className="header__menu-item header__menu-item_bold">
          {props.email}
        </p>
      ) : (
        ""
      )}
      {location.pathname === "/" ? (
        <button
          onClick={props.onLogOut}
          className="header__menu_exit-button hover"
        >
          Выйти
        </button>
      ) : (
        ""
      )}
    </nav>
  );







}
export default NavBar;

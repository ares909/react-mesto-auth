import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import settingsButton from "../blocks/header/__menu-settings/images/header_settings.svg"

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
          className="header__menu_exit-button header__menu_exit-button_hidden hover"
        >
          Выйти
        </button>
      ) : (
        ""
      )}
      {location.pathname === "/" ? (<img onClick={props.onSettings} src={settingsButton} className="header__menu-settings hover"/>) : ''}
    </nav>
  );







}
export default NavBar;

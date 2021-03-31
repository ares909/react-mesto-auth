import React from "react";
import logo from "../blocks/header/images/logo.svg";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <header className="header">
      <a href="#" className="header__logo-box hover" target="_blank">
        <img className="header__logo" src={logo} alt="лого" />
      </a>
      <NavBar
        loggedIn={props.loggedIn}
        email={props.email}
        onLogOut={props.onLogOut}
        onSettings={props.onSettings}
      ></NavBar>
    </header>
  );
}

export default Header;

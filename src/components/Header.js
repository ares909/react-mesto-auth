import React from "react";
import logo from "../blocks/header/images/logo.svg";
import { Link, withRouter } from "react-router-dom";
import NavBar from "./NavBar";

function Header(props) {
  return (
    <header className="header">
      <a href="#" className="header__logo-box hover" target="_blank">
        <img className="header__logo" src={logo} alt="лого" />
      </a>
      <NavBar signIn={props.signIn} onChangeForm={props.onChangeForm}></NavBar>
    </header>
  );
}

export default Header;

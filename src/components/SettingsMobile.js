import React from "react";
import MobilenNav from "./MobileNav";

function SettingsMobile(props) {
  const className = `header__menu-popup ${
    props.isOpen ? "header__menu-popup_opened" : ""
  }`;
  return (
    <>
      <section className={className} id={props.id}>
        <MobilenNav email={props.email} onLogOut={props.onLogOut}></MobilenNav>
        <button
          onClick={props.onClose}
          className="popup__cross hover"
          type="button"
        ></button>
      </section>
    </>
  );
}

export default SettingsMobile;

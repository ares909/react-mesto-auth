import React from "react";

function MobilenNav(props) {
  return (
    <>
      <p className="header__menu-item header__menu-item_mobile">{props.email}</p>

      <button
        onClick={props.onLogOut}
        className="header__menu_exit-button header__menu_exit-button_mobile hover"
      >
        Выйти
      </button>
    </>
  );
}

export default MobilenNav;

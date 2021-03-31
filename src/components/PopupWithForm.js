import React from "react";
import FieldSet from "./FieldSet";

function PopupWithForm(props) {
  const className = `popup ${props.isOpen ? "popup_opened" : ""}`;
  return (
    <>
      <section className={className} id={props.id}>
        <div className="popup__container" id="popup_container">
          <form className={props.name} onSubmit={props.onSubmit} noValidate>
            <FieldSet
              submitted={props.submitted}
              onSubmit={props.onSubmit}
              name={props.name}
              title={props.title}
              button={props.button}
            >
              {props.children}
            </FieldSet>
            <button
              onClick={props.onClose}
              className="popup__cross hover"
              type="button"
            ></button>
          </form>
        </div>
      </section>
    </>
  );
}

export default PopupWithForm;

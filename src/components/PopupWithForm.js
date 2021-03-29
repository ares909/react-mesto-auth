import React from "react";
import FieldSet from "./FieldSet";

function PopupWithForm(props) {
  const className = `popup ${props.isOpen ? "popup_opened" : ""}`;
  return (
    <>
      <section className={className} id={props.id}>
        <div className="popup__container" id="popup_container">
          <form
            className={props.name}
            onSubmit={props.onSubmit}
            noValidate
          >
            <FieldSet
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

{
  /* <fieldset
className={`popup__${props.name}-container`}
// id="form_name_container"
>
<h2 className={`popup__${props.name}-heading`}>{props.title}</h2>
{props.children}

<button className="popup__form-button" type="submit">
  {props.button}
</button>
<div
  className="popup__form-button popup__card-button popup__form-button_loader popup__form-button_hidden"
  type="submit"
>
  Сохранение...
</div>
</fieldset> */
}

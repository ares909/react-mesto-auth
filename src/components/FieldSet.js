import React from "react";

function FieldSet(props) {
  if (props.submitted) {
    return (
      <>
        <fieldset className={`${props.name}-container`}>
          {props.children}
        </fieldset>
        <button
          onClick={props.onClose}
          className="popup__cross hover"
          type="button"
        ></button>
      </>
    );
  } else {
    return (
      <>
        <fieldset className={`${props.name}-container`}>
          <h2 className={`${props.name}-heading`}>{props.title}</h2>
          {props.children}

          <button className={`${props.name}-button`} type="submit">
            {props.button}
          </button>
          <div
            className={`${props.name}-button ${props.name}-button popup__form-button_loader popup__form-button_hidden`}
            type="submit"
          >
            Сохранение...
          </div>
        </fieldset>
        <button
          onClick={props.onClose}
          className="popup__cross hover"
          type="button"
        ></button>
      </>
    );
  }
}

export default FieldSet;

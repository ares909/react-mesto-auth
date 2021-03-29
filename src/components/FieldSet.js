import React from "react";

function FieldSet(props) {

  return (
    <>

            <fieldset
              className={`${props.name}-container`}
              // id="form_name_container"
            >
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
            <button onClick={props.onClose} className="popup__cross hover" type="button"></button>

    </>
  );
}

export default FieldSet;


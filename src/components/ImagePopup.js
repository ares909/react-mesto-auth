import React from "react";

function ImagePopup(props) {
  const className = `popup ${props.card ? "popup_opened" : ""}`;
  return (
    <>
      <section className={className} id="popup_image-container">
        <div className="popup__container">
          <div className="popup__image-container">
            <img
              className="popup__image"
              src={props.card.link}
              alt={props.card.alt}
              id="popup-image"
            />
            <p className="popup__description" id="description">
              {props.card.name}
            </p>
            <button
            onClick={props.onClose}
              className="popup__cross popup__cross_right hover"
              type="button"
              id="close_image"
            ></button>
          </div>
        </div>
      </section>
    </>
  );
}
export default ImagePopup;

import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");

  function handleChangeCardName(e) {
    setCardName(e.target.value);
  }
  function handleChangeCardLink(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: cardName,
      link: cardLink,
    });
    setCardName("");
    setCardLink("");
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      id="form-place"
      title="Новое место"
      name="popup__card"
      button="Создать"
    >
      <input
        name="name"
        id="place-input"
        type="text"
        className="popup__form-text popup__card-text"
        required
        placeholder="Название"
        minLength="2"
        maxLength="30"
        onChange={handleChangeCardName}
        value={cardName}
      />
      <span className="popup__error" id="place-input-error"></span>
      <input
        name="link"
        id="image-input"
        type="url"
        className="popup__form-text popup__card-text"
        required
        placeholder="Ссылка на картинку"
        onChange={handleChangeCardLink}
        value={cardLink}
      />
      <span className="popup__error" id="image-input-error"></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;

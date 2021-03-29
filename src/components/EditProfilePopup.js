import { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      id="form-name"
      title="Редактировать профиль"
      name="popup__form"
      button="Сохранить"
    >
      <input
        name="name"
        id="name-input"
        type="text"
        className="popup__form-text"
        required
        minLength="2"
        maxLength="40"
        value={name || ""}
        onChange={handleChangeName}
      />
      <span className="popup__error" id="name-input-error"></span>
      <input
        name="profession"
        id="profession-input"
        type="text"
        className="popup__form-text"
        required
        minLength="2"
        maxLength="200"
        value={description || ""}
        onChange={handleChangeDescription}
      />
      <span className="popup__error" id="profession-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

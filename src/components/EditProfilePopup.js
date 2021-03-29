import { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  useEffect(() => {if (name === undefined && description === undefined) {
    return null
  }
  else{
    setDisabled(formValidation());
  }}, [name, description]);

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

  function formValidation() {
    if (name === "") {
      setNameError("Введите имя");
      setIsNameValid(false);
      return true
    } 
    else if (name.length < 2) {
      setNameError("Поле должно содержать не меньше 2 символов");
      setIsNameValid(false);
      return true
    }
    else if (description === '') {
      setDescriptionError("Введите описание");
      setIsDescriptionValid(false);
      return true
    }
    else if (description.length < 2) {
      setDescriptionError("Поле должно содержать не меньше 2 символов");
      setIsDescriptionValid(false);
      return true
    }
    // else if (name.length > 40) {
    //   setNameError("Поле должно содержать не больше 40 символов");
    //   setIsValid(false);
    // } 
    else {
      setDescriptionError(null);
      setNameError(null);
      setIsNameValid(true);
      setIsDescriptionValid(true);
      return false
    }
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      disabled={disabled}
      id="form-name"
      title="Редактировать профиль"
      name="form"
      button="Сохранить"
    >
      <input
        name="name"
        id="name-input"
        type="text"
        className={`popup__form-text ${!isNameValid ? 'popup__form_type_error' : ''}`}
        required
        minLength="2"
        maxLength="40"
        value={name || ""}
        onChange={handleChangeName}
      />
      <span className={`popup__error ${!isNameValid ? 'popup__error_visible': ''}`} id="name-input-error">
        {nameError}
      </span>
      <input
        name="profession"
        id="profession-input"
        type="text"
        className={`popup__form-text ${!isDescriptionValid ? 'popup__form_type_error' : ''}`}
        required
        minLength="2"
        maxLength="200"
        value={description || ""}
        onChange={handleChangeDescription}
      />
      <span className={`popup__error ${!isDescriptionValid ? 'popup__error_visible': ''}`} id="profession-input-error">{descriptionError}</span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

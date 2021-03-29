import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({ avatar: avatarRef.current.value });
    avatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      id="form-avatar"
      title="Обновить аватар"
      button="Сохранить"
      name="card"
    >
      <input
        name="avatar"
        id="avatar-input"
        type="url"
        className="popup__form-text popup__card-text"
        required
        placeholder="Ссылка на картинку"
        ref={avatarRef}
      />
      <span className="popup__error" id="avatar-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

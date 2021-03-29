import trashBin from "../blocks/element/__trash/images/Trash.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { useContext } from "react";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? "" : "element__trash_hidden"
  } hover`;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ``
  } hover`;

  function handleCardClick() {
    props.onCardClick(props.card);
  }
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleDeleteClick(){
    props.onCardDelete(props.card);
  }

  return (
    <div className="element">
      <img
        src={props.card.link}
        className="element__image"
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <div className="element__place">
        <h2 className="element__text">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
            type="button"
          ></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <img src={trashBin} className={cardDeleteButtonClassName} onClick={handleDeleteClick} alt="удалить" />
    </div>
  );
}

export default Card;

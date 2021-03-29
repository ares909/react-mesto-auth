import { useState, useContext } from "react";
import addButtonImage from "../blocks/profile/__addbutton/image/plus.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [isHovered, setIsHovered] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const onMouseOverHandler = () => {
    setIsHovered(!isHovered);
  };
  const onMouseLeaveHandler = () => {
    setIsHovered(!isHovered);
  };
  const className = `profile__avatar-button ${
    isHovered ? "profile__avatar-button_focused" : ""
  }`;

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div
            onMouseEnter={onMouseOverHandler}
            onMouseLeave={onMouseLeaveHandler}
            className="profile__avatar-container"
          >
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="аватар"
            />
            <button
              onClick={props.onEditAvatar}
              className={className}
              type="button"
            ></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__profession">{currentUser.about}</p>
            <button
              onClick={props.onEditProfile}
              className="profile__editbutton hover"
              type="button"
            ></button>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          className="profile__addbutton hover"
          type="button"
        >
          <img src={addButtonImage} className="profile__plus" alt="плюс" />
        </button>
      </section>
      <section className="elements">
        {props.cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;

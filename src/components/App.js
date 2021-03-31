import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Register from "./Register";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";
import * as auth from "../auth.js";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import SettingsMobile from "./SettingsMobile";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import api from "../utils/api.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [fail, setFail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const history = useHistory();
  const [email, setEmail] = useState("");

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };
  const openInfoTooltipOpen = () => {
    setIsInfoTooltipOpen(!isInfoTooltipOpen);
    setSubmitted(!submitted);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  const handleSettingsClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
    setIsInfoTooltipOpen(false);
    setSubmitted(false);
    setFail(false);
  };

  const handleEscClose = (e) => {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  };

  const closeByClickOnOverlay = (evt) => {
    if (evt.target.classList.contains("popup")) {
      closeAllPopups();
    }
  };
  const handleUserInfo = () => {
    api
      .getUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getInitialCards = () => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleUserInfo();
    getInitialCards();
    handleTokenCheck();
    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", closeByClickOnOverlay);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", closeByClickOnOverlay);
    };
  }, []);

  const handleUpdateUser = (currentUser) => {
    api
      .changeProfileInfo({ name: currentUser.name, about: currentUser.about })
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateAvatar = (currentUser) => {
    api
      .changeAvatar(currentUser)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api
        .setCardLike(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .deleteCardLike(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => (c._id === card._id ? "" : c)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(card) {
    api
      .addNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin() {
    // setLoggedIn(!loggedIn);
    handleTokenCheck();
  }

  function handleLogOut() {
    localStorage.removeItem("token");
    history.push("/signin");
  }

  function handleTokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      auth.tokenCheck(token).then((res) => {
        if (res.data) {
          setLoggedIn(!loggedIn);
          setEmail(res.data.email);
          history.push("/");
        } else if (res.message) {
          return res.message;
        }
      });
    } else {
      return;
    }
  }

  function handleRegistrationFail() {
    setIsInfoTooltipOpen(!isInfoTooltipOpen);
    setSubmitted(!submitted);
    setFail(!fail);
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <SettingsMobile
          isOpen={isSettingsOpen}
          onClose={closeAllPopups}
          email={email}
          onLogOut={handleLogOut}
        ></SettingsMobile>
        <Header
          loggedIn={loggedIn}
          email={email}
          onLogOut={handleLogOut}
          onSettings={handleSettingsClick}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        ></EditProfilePopup>
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        ></AddPlacePopup>
        <PopupWithForm
          id="confirm"
          title="Вы уверены?"
          name="card"
          button="Да"
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        ></EditAvatarPopup>
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeAllPopups}
          submitted={submitted}
          failed={fail}
        ></InfoTooltip>
        <Route path="/signup">
          <Register
            onRegister={openInfoTooltipOpen}
            onFail={handleRegistrationFail}
          />
        </Route>
        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>

        <Switch>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            component={Main}
          >
            <Main></Main>
            <Footer />
          </ProtectedRoute>
        </Switch>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;

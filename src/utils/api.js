const onError = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject("Сервер не доступен");
};

class Api {
  constructor(options) {
    this._options = options;
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }

  getUserData() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    }).then(onError);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    }).then(onError);
  }

  changeProfileInfo(item) {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(item),
    }).then(onError);
  }

  addNewCard(item) {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(item),
    })
      .then(onError)
      .finally();
  }
  deleteCard(item) {
    return fetch(`${this._baseUrl}cards/${item}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(onError);
  }
  setCardLike(item) {
    return fetch(`${this._baseUrl}cards/likes/${item}`, {
      headers: this._headers,
      method: "PUT",
    }).then(onError);
  }
  deleteCardLike(item) {
    return fetch(`${this._baseUrl}cards/likes/${item}`, {
      headers: this._headers,
      method: "DELETE",
    })
      .then(onError)
      .finally();
  }
  changeAvatar(avatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(avatar),
    }).then(onError);
  }
}
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-20/",
  headers: {
    authorization: "89fc14f5-c7ca-4e60-97f4-2de7395294ca",
    "Content-Type": "application/json",
  },
});
export default api

//comment
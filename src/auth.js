export const BASE_URL = "https://auth.nomoreparties.co/";

export const register = (email, password) => {
  return fetch(`${BASE_URL}signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      return response.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const authorization = (email, password) => {
  return fetch(`${BASE_URL}signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })
    .then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    )
    .catch((err) => console.log(err));
};

// export const identification = (email) => {
//   return fetch(`${BASE_URL}users/me`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) =>
//       res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
//     )
//     .catch((err) => console.log(err));
// };

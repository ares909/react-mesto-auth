import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import FieldSet from "./FieldSet";
import * as auth from "../auth.js";

function Login(props) {
  const [values, setValues] = useState({ email: "", password: "" });
  const history = useHistory();
  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    auth.authorize(values.email, values.password).then((res) => {
      if (res.token) {
        setValues({ email: "", password: "" });
        props.onLogin();
        history.push("/");
      }
    });
  }
  return (
    <form className="register" onSubmit={handleSubmit}>
      <FieldSet
        onClose={props.onClose}
        onSubmit={handleSubmit}
        id="form-register"
        title="Вход"
        name="register__form"
        button="Войти"
      >
        <input
          name="email"
          placeholder="Email"
          id="email-input"
          type="email"
          className="register__form-text"
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="popup__error"></span>
        <input
          name="password"
          placeholder="Пароль"
          id="password-input"
          type="password"
          className="register__form-text"
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="popup__error"></span>
      </FieldSet>
    </form>
  );
}
export default withRouter(Login);

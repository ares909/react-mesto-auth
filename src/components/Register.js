import { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import FieldSet from "./FieldSet";
import * as auth from "../auth.js";

function Register(props) {
  const [values, setValues] = useState({ email: "", password: "" });
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    // props.onChangeForm();
    auth.register(values.email, values.password).then((res) => {
      if (res.data) {
        history.push("/signin");
        props.onRegister();
      } else if (res.message || res.error) {
        props.onFail();
      }
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  return (
    <form className="register" onSubmit={handleSubmit} noValidate>
      <FieldSet
        id="form-register"
        title="Регистрация"
        name="register__form"
        button="Зарегистрироваться"
      >
        <input
          name="email"
          placeholder="Email"
          id="email-input"
          type="email"
          className="register__form-text"
          onChange={handleChange}
          value={values.email || ""}
        />
        <span className="popup__error"></span>
        <input
          name="password"
          placeholder="Пароль"
          id="password-input"
          type="password"
          className="register__form-text"
          onChange={handleChange}
          value={values.password || ""}
        />
        <span className="popup__error"></span>
      </FieldSet>
      <p>
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="register__form-login-button hover">
          Войти
        </Link>
      </p>
    </form>
  );
}
export default withRouter(Register);

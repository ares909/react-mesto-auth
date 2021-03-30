import { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Link, withRouter, useHistory  } from "react-router-dom";
import FieldSet from "./FieldSet";
import * as auth from '../auth.js';

function Register(props) {
  function handleClick() {
    props.onChangeForm();
  }

 const [values, setValues] = useState({email: '', password: ''}) 
 const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();
    auth.register(values.email, values.password).then((res) => {
      if(res.statusCode !== 400){
        history.push('/signin');
      }
    })
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setValues({...values, [name]: value})
  }
  return (
    <form className="register" onSubmit={handleSubmit}>
      <FieldSet
        isOpen={true}
        onClose={props.onClose}
        // onSubmit={handleSubmit}
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
          value={values.email || ''}
          
        />
        <span className="popup__error"></span>
        <input
          name="password"
          placeholder="Пароль"
          id="password-input"
          type="password"
          className="register__form-text"
          onChange={handleChange}
          value={values.password || ''}
        />
        <span className="popup__error"></span>
      </FieldSet>
      <p>
        Уже зарегистрированы?{" "}
        <Link to="/signin" className="register__form-login-button hover" onClick={handleClick}>
          Войти
        </Link>
      </p>
    </form>
  );
}
export default withRouter(Register);
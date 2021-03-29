import { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Link, withRouter } from 'react-router-dom';
import FieldSet from "./FieldSet";



function Register(props) {

    function handleSubmit(e) {
        e.preventDefault();
        
      }
    return (
        <section className="register">
        <FieldSet
          isOpen={true}
          onClose={props.onClose}
          onSubmit={handleSubmit}
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

            
          />
          <span className="popup__error"></span>
          <input
            name="password"
            placeholder="Пароль"
            id="password-input"
            type="password"
            className="register__form-text"

           
          />
          <span className="popup__error"></span>
        </FieldSet>
        <p>Уже зарегистрированы? <button className="register__form-login-button hover">Войти</button></p>
        </section>
        
      );




}
export default withRouter(Register);
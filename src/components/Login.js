import { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Link, withRouter } from 'react-router-dom';
import FieldSet from "./FieldSet";



function Login(props) {

    function handleSubmit(e) {
        e.preventDefault();
        
      }
    return (
        <form className="register">
        <FieldSet
          isOpen={true}
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
        
        </form>
        
      );




}
export default withRouter(Login);
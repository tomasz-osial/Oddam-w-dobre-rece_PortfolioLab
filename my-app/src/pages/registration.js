import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import '../scss/main.scss';
import decoration from "../assets/Decoration.svg";

const Registration  = () => {
    return (
        <div className='regPageContainer'>
            <div className='regNavigationContainer'>
                <div className='logInPanel'>
                    <NavLink exact to='/logowanie'>
                        <div className='logInBtn'>Zaloguj</div>
                    </NavLink>
                    <NavLink exact to='/rejestracja'>
                        <div className='registerBtn'>Załóż konto</div>
                    </NavLink>
                </div>
                <div className='menuContainer'>
                    <ul className='menuList'>
                        <li>
                            <NavLink exact to='/'>
                                Start
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/'>
                                O co chodzi?
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/'>
                                O nas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/'>
                                Fundacja i organizacje
                            </NavLink>
                        </li>
                        <li>
                           <NavLink exact to='/'>
                               Kontakt
                           </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='regContainer'>
                <div className='regTitle'>
                    Załóż konto
                </div>
                <img src={decoration} alt='decoration'/>
                <RegistrationForm />
            </div>
        </div>
    )
};

class RegistrationForm extends Component {

    state = {
        email: '',
        password: '',
        password2: '',
        isEmailValid: true,
        isPasswordValid: true,
        isPassword2Valid: true,
        isPasswordsValid: true
    };

    isFormValid = () => {
      const { email, password, password2 } = this.state;
      const validEmailRegex =
          RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
      const isEmailValid = validEmailRegex.test(email);
      const isPasswordValid = password.length >= 6;
      const isPassword2Valid = password2.length >=6;
      const isPasswordsValid = password === password2;
      this.setState({
          isEmailValid, isPasswordValid, isPassword2Valid, isPasswordsValid
      });
        return isEmailValid && isPasswordValid && isPassword2Valid && isPasswordsValid
    };

    onInputChange = event => {
        this.setState({
        [event.target.name]: event.target.value
        })
    };

    onClickRegister = event => {
        event.preventDefault();
        if (this.isFormValid()) {
            console.log("Utorzono konto")
        } else {
            console.log("Sprawdź dane")
        }
    };

    render() {
        const { isEmailValid, isPasswordValid, isPassword2Valid, isPasswordsValid } = this.state;
        return (
            <>
            <form className='regForm'>
                <label>
                    Email<br/>
                    <input
                        type="text"
                        name='email'
                        className={!this.state.isEmailValid ? 'formError' : 'regFormInput'}
                        onChange={this.onInputChange}
                    />
                    <br/>
                    {!isEmailValid && <span className='errorInfo'>
                        Podany email jest nieprawidłowy!
                    </span>}
                </label>
                <label>
                    Hasło<br/>
                    <input
                        type="password"
                        name='password'
                        className={this.state.isPasswordValid ? 'regFormInput' : 'formError'}
                        onChange={this.onInputChange}
                    />
                    <br/>
                    {!isPasswordValid && <span className='errorInfo'>
                        Podane hasło jest za krótkie!
                    </span>}
                </label>
                <label>
                    Powtórz hasło<br/>
                    <input
                        type="password"
                        name='password2'
                        className={this.state.isPassword2Valid ? 'regFormInput' : 'formError'}
                        onChange={this.onInputChange}
                    />
                    <br/>
                    {!isPassword2Valid && <span className='errorInfo'>
                        Podane hasło jest za krótkie!
                    </span>}
                    <br/>
                    {!isPasswordsValid && <span className='errorInfo'>
                        Podane hasła muszą być zgodne!
                    </span>}
                </label>
            </form>
            <div className='regActionContainer'>
                <NavLink exact to = '/logowanie'>
                    <div className='regLogin'>
                        Zaloguj się
                    </div>
                </NavLink>
                <div className='regRegister'
                    onClick={this.onClickRegister}>
                    Załóż konto
                </div>
            </div>
            </>
        )
    }
}

export default Registration;
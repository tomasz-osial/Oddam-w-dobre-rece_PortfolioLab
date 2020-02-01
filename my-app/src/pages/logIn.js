import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import '../scss/main.scss';
import decoration from "../assets/Decoration.svg";


const LogIn  = () => {
    return (
        <div className='logInContainer'>
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
                    Zaloguj się
                </div>
                <img src={decoration} alt='decoration'/>
                <LogInForm />
            </div>
        </div>
    )
};

class LogInForm extends Component {

    state = {
     email: '',
     password: '',
     isEmailValid: true,
     isPasswordValid: true,
    };

    isFormValid = () => {
      const { email, password } = this.state;
        const validEmailRegex =
            RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
      const isEmailValid = validEmailRegex.test(email);
      const isPasswordValid = password.length >= 6;
      this.setState({
          isEmailValid, isPasswordValid
      });
      return isEmailValid && isPasswordValid
    };

    onInputChange  = event => {
      this.setState({
        [event.target.name]: event.target.value
      })
    };

    onClickLogIn = event => {
        event.preventDefault();
        if (this.isFormValid()) {
            console.log("Zalogowano")
        } else {
            console.log("Sprawdź dane")
        }
    };

    render() {
        const { isEmailValid, isPasswordValid } = this.state;
        return (
            <>
                <form className='logForm'>
                <label>
                    Email<br/>
                    <input
                        type="text"
                        name='email'
                        onChange={this.onInputChange}
                        className={this.state.isEmailValid === false ? 'formError' : 'logFormInput'}
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
                        onChange={this.onInputChange}
                        className={this.state.isPasswordValid === false ? 'formError' : 'logFormInput'}
                    />
                    <br/>
                    {!isPasswordValid && <span className='errorInfo'>
                        Podany hasło jest za krótkie!
                    </span>}
                </label>
            </form>
                <div className='regActionContainer'>
                    <NavLink exact to = '/rejestracja'>
                        <div className='logRegister'>
                            Załóż konto
                        </div>
                    </NavLink>
                    <div className='logLogin'
                        onClick={this.onClickLogIn}>
                        Zaloguj się
                    </div>
                </div>
                </>
        )
    }
}

export default LogIn;
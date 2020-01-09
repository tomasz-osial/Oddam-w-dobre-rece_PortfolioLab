import React from "react";
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
                <form className='regForm'>
                    <label>
                        Email<br/>
                        <input type="text"/>
                        <br/>
                    </label>
                    <label>
                        Hasło<br/>
                        <input type="password"/>
                        <br/>
                    </label>
                    <label>
                        Powtórz hasło<br/>
                        <input type="password"/>
                        <br/>
                    </label>
                </form>
                <div className='regActionContainer'>
                    <NavLink exact to = '/logowanie'>
                        <div className='regLogin'>
                            Zaloguj się
                        </div>
                    </NavLink>
                    <div className='regRegister'>
                        Załóż konto
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Registration;
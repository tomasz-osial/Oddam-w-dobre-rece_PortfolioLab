import React from "react";

import '../scss/main.scss';
import decoration from '../assets/Decoration.svg';
import {NavLink} from "react-router-dom";

const LogOut = () => {
    return (
    <div className='logOutContainer'>
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
                Wylogowanie nastąpiło<br/>pomyślnie!
            </div>
            <img src={decoration} alt='decoration'/>
            <div className='regActionContainer'>
                <NavLink exact to = '/'>
                    <div className='logoutHome'>
                        Strona główna
                    </div>
                </NavLink>
            </div>
        </div>
    </div>
    )
};

export default LogOut;
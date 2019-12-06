import React from 'react';
import {NavLink as Link} from "react-router-dom";

import '../../scss/main.scss';
import logo from '../../assets/Home-Hero-Image.jpg';
import decoration from '../../assets/Decoration.svg'

const HomeHeader = () => {
    return (
        <nav>
            <div className='homeHeaderContainer'>
                <img src={logo} alt='Logo' className='logoHeader'/>
                <div className='navigationContainer'>
                    <div className='logInPanel'>
                        <Link exact to='/logowanie'>
                            <div className='logInBtn'>Zaloguj</div>
                        </Link>
                        <Link exact to='/rejestracja'>
                            <div className='registerBtn'>Załóż konto</div>
                        </Link>
                    </div>
                    <div className='menuContainer'>
                        <ul className='menuList'>
                            <li>Start</li>
                            <li>O co chodzi?</li>
                            <li>O nas</li>
                            <li>Fundacja i organizacje</li>
                            <li>Kontakt</li>
                        </ul>
                    </div>
                    <div className='titleContainer'>
                        <p>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <img src={decoration} alt="decoration" className='decoration' />
                        <div className='actionsContainer'>
                            <Link exact to='/logowanie' className='actionsContainer'>
                                <div className='returnAction'>oddaj<br/>rzeczy</div>
                            </Link>
                            <Link exact to='/logowanie' className='actionsContainer'>
                                <div className='collectAction'>zorganizuj<br/>zbiórkę</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};


export default HomeHeader;
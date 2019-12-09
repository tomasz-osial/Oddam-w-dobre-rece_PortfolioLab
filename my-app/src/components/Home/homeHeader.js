import React from 'react';
import {NavLink} from "react-router-dom";
import { Link } from 'react-scroll'

import '../../scss/main.scss';
import logo from '../../assets/Home-Hero-Image.jpg';
import decoration from '../../assets/Decoration.svg'

const HomeHeader = () => {
    return (
        <nav>
            <div className='homeHeaderContainer' id="home">
                <img src={logo} alt='Logo' className='logoHeader'/>
                <div className='navigationContainer'>
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
                                <Link
                                    to="home"
                                    smooth={true}
                                    >Start
                                </Link>
                            </li>
                            <li>
                                <Link
                                to='main'
                                smooth={true}
                                offset={-70}
                                    >O co chodzi?
                                </Link>
                            </li>
                            <li>
                                <Link
                                 to='aboutUs'
                                 smooth={true}
                                 offset={-70}
                                    >O nas
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="fundations"
                                    smooth={true}
                                    offset={-70}
                                    >Fundacja i organizacje
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to='contact'
                                    smooth={true}
                                    offset={-70}
                                >Kontakt
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='titleContainer'>
                        <p>Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</p>
                        <img src={decoration} alt="decoration" className='decoration' />
                        <div className='actionsContainer'>
                            <NavLink exact to='/logowanie' className='actionsContainer'>
                                <div className='returnAction'>oddaj<br/>rzeczy</div>
                            </NavLink>
                            <NavLink exact to='/logowanie' className='actionsContainer'>
                                <div className='collectAction'>zorganizuj<br/>zbiórkę</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};


export default HomeHeader;
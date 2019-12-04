import React from 'react';
import {NavLink as Link} from "react-router-dom";

import '../../scss/main.scss';
import logo from '../../assets/Home-Hero-Image.jpg'

const HomeHeader = () => {
    return (
        <nav>
            <div className='homeHeaderContainer'>
                <img src={logo} alt='Logo' className='logoHeader'/>
                <div>Tutaj będzie nawigacja i tekst</div>
            </div>
        </nav>
    )
};


export default HomeHeader;
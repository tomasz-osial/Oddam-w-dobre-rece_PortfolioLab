import React from 'react';
import {NavLink as Link} from "react-router-dom";

import '../../scss/main.scss';
import decoration from '../../assets/Decoration.svg';
import icon1 from '../../assets/Icon-1.svg';
import icon2 from '../../assets/Icon-2.svg';
import icon3 from '../../assets/Icon-3.svg';
import icon4 from '../../assets/Icon-4.svg'


const HomeMain = () => {
    return (
        <div className='mainContainer' id='main'>
            <div className='mainTitle'>
                Wystarczą 4 proste kroki
            </div>
            <img src={decoration} alt="decoration" />
            <div className='mainColumnsContainer'>
                <div className='mainColumn'>
                    <img src={icon1} alt="icon1" className='mainIcon'/>
                    <div className='mainColumnTitle'>
                        Wybierz rzeczy
                    </div>
                    <p className='mainColumnText'>
                        ubrania, zabawki,<br/>sprzęt i inne
                    </p>
                </div>
                <div className='mainColumn'>
                    <img src={icon2} alt="icon2" className='mainIcon'/>
                    <div className='mainColumnTitle'>
                        Spakuj je
                    </div>
                    <p className='mainColumnText'>
                        skorzystaj z<br/>worków na śmieci
                    </p>
                </div>
                <div className='mainColumn'>
                    <img src={icon3} alt="icon3" className='mainIcon'/>
                    <div className='mainColumnTitle'>
                        Zdecyduj komu<br/>chcesz pomóc
                    </div>
                    <p className='mainColumnText'>
                        wybierz zaufane<br/>miejsce
                    </p>
                </div>
                <div className='mainColumn'>
                    <img src={icon4} alt="icon4" className='mainIcon'/>
                    <div className='mainColumnTitle'>
                        Zamów kuriera
                    </div>
                    <p className='mainColumnText'>
                        kurier przyjedzie<br/>w dogodnym terminie
                    </p>
                </div>
            </div>
            <Link exact to='/logowanie' className='mainActionsContainer'>
                <div className='mainReturnAction'>oddaj<br/>rzeczy</div>
            </Link>
        </div>
    )
};

export default HomeMain;
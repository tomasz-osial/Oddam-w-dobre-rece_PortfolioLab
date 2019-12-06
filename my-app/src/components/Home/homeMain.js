import React from 'react';
import {NavLink as Link} from "react-router-dom";

import '../../scss/main.scss';

const HomeColumns= () => {
    return (
    <div className='homeMainContainer'>
        <div className='columnsContainer'>
            <div className='column'>
                <p className='columnNumber'>
                    10
                </p>
                <span className='columnTitle'>
                    oddanych worków
                </span>
                <p className='columnText'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt dolorum ducimus ea earum exercitationem laboriosam quia, saepe.
                </p>
            </div>
            <div className='column'>
                <p className='columnNumber'>
                    5
                </p>
                <span className='columnTitle'>
                    wspartych organizacji
                </span>
                <p className='columnText'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt dolorum ducimus ea earum exercitationem laboriosam quia, saepe.
                </p>
            </div>
            <div className='column'>
                <p className='columnNumber'>
                    7
                </p>
                <span className='columnTitle'>
                   zorganizowanych zbiórek
                </span>
                <p className='columnText'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Deserunt dolorum ducimus ea earum exercitationem laboriosam quia, saepe.
                </p>
            </div>
        </div>
    </div>
    )
};

export default HomeColumns;
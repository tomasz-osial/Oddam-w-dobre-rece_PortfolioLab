import React from 'react';

import '../../scss/main.scss';
import decoration from '../../assets/Decoration.svg';
import clothes from '../../assets/Background-Contact-Form.jpg';
import facebook from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg'

const HomeFooter = ()=>{
    return(
    <div className='footerContainer' id='contact'>
        <img src={clothes} alt="clothes" className='footerBackground' />
        <div className='formColumnContainer' >
            <p className='formTitle'>Skontaktuj się z nami</p>
            <img src={decoration} alt="decoration" className='footerDecoration'/>
            <div className='formContainer'>
                <form className='contactForm'>
                    <label>Wpisz swoje imię<br/>
                        <input type="text" placeholder='Twoje imię' size='25'/>
                    </label>
                    <label>Wpisz swój email<br/>
                        <input type="text" placeholder='Twój email np. xyz@abc.pl' size='25'/>
                    </label>
                    <label>Wpisz swoją wiadomość
                        <textarea rows="4" cols="54" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nulla varius placerat dolor. Sed venenatis ex aliquam dolor imperdiet placerat.
                        Curabitur ultricies sollicitudin sapien in bibendum.'/>
                    </label>
                    <div className='submitContainer'>
                        <div className='submitBtn'>
                            Wyślij
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div className='footerBar'>
            <div className='copyright'>
                Copyright by Coders Lab
            </div>
            <div className='mediaContainer'>
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
            </div>
        </div>
    </div>
    )
};


export default HomeFooter;
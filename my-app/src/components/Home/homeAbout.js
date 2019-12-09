import React from 'react';

import '../../scss/main.scss';
import decoration from '../../assets/Decoration.svg';
import signature from '../../assets/Signature.svg';
import people from '../../assets/People.jpg'

const HeadAbout = ()=> {
    return (
    <div className='aboutContainer' id='aboutUs'>
        <div className='aboutColumn'>
            <p className='aboutTitle'>
                O nas
            </p>
            <img src={decoration} alt="decoration" className='aboutDecoration'/>
            <p className='aboutText'>
                Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
                fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
                zucchini.
            </p>
            <div className='signatureContainer'>
                <img src={signature} alt="signature" className='aboutSignature'/>
            </div>
        </div>
        <img src={people} alt="People" className='aboutPeople'/>
    </div>
    )
};

export default HeadAbout;
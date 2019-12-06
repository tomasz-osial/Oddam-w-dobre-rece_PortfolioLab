import React from "react";

import '../scss/main.scss';
import HomeHeader from '../components/Home/homeHeader';
import HomeColumns from '../components/Home/homeColumns';
import HomeMain from '../components/Home/homeMain';
import HomeAbout from '../components/Home/homeAbout'

const Home  = () => {
    return (
        <>
            <HomeHeader />
            <HomeColumns />
            <HomeMain />
            <HomeAbout />
        </>
    )
};

export default Home;
import React from "react";

import '../scss/main.scss';
import HomeHeader from '../components/Home/homeHeader';
import HomeColumns from '../components/Home/homeColumns';
import HomeMain from '../components/Home/homeMain';
import HomeAbout from '../components/Home/homeAbout';
import HomeHelp from "../components/Home/homeHelp";

const Home  = () => {
    return (
        <>
            <HomeHeader />
            <HomeColumns />
            <HomeMain />
            <HomeAbout />
            <HomeHelp />
        </>
    )
};

export default Home;
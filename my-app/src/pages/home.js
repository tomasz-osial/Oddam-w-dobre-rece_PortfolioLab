import React from "react";

import '../scss/main.scss';
import HomeHeader from '../components/Home/homeHeader';
import HomeColumns from '../components/Home/homeMain'

const Home  = () => {
    return (
        <>
            <HomeHeader />
            <HomeColumns />
        </>
    )
};

export default Home;
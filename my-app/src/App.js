import React from 'react';
// import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { BrowserRouter,
  Route,
  Switch} from "react-router-dom";

import './scss/main.scss';
import Home from './pages/home';
import ReturnItems from './pages/returnItems';
import Registration from './pages/registration';
import LogIn from './pages/logIn'


const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/oddaj-rzeczy' component={ReturnItems} />
            <Route path='/rejestracja' component={Registration} />
            <Route path='/logowanie' component={LogIn} />
          </Switch>
        </BrowserRouter>
    )
};


export default App;

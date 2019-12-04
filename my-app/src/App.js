import React from 'react';
// import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { BrowserRouter,
  Route,
  Switch} from "react-router-dom";

import './scss/main.scss';
import Home from './pages/home';
import ReturnItems from './pages/returnItems';

const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/oddaj-rzeczy' component={ReturnItems} />
          </Switch>
        </BrowserRouter>
    )
};


export default App;

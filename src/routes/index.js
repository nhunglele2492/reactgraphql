import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home  from './homePage';
import Graphql  from './Graphql';

import Header from '../Components/00-siteWide/header/header';
import Footer  from '../Components/00-siteWide/footer/footer';

import '../Assets/css/slick.min.css';
import '../Assets/css/styles.min.css';

export default () => (
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/graphql" component={Graphql}/>
      <Footer/>
    </div>
  </Router>
);

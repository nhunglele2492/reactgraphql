import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home  from './homePage';
import Graphql  from './graphqlPage';

import CreateBanner from '../Components/033-heroBanner/CreateBanner';
import DetailBanner from '../Components/033-heroBanner/DetailBanner';
import BannerList from '../Components/033-heroBanner/BannerList';

import '../Assets/css/slick.min.css';
import '../Assets/css/styles.min.css';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/graphql" component={Graphql}/>
      <Route exact path="/banner" component={BannerList}/>
      <Route exact path="/banner/create" component={CreateBanner}/>
      <Route exact path="/banner/detail/:id" component={DetailBanner}/>
    </div>
  </Router>
);

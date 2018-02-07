import React from 'react';
// import { Spinner } from '@blueprintjs/core';

import { app } from '../firebase';
// SiteWide
import Header from '../siteWide/Header';
import Footer from '../siteWide/Footer';

class DefaultLayout extends React.Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
    };
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true
        })
      } else {
        this.setState({
          authenticated: false
        })
      }
    })
  }

  render() {
    let container = this.props.container;
    if(container) {
      container='container'
    }
    else {
      container=''
    }
    return (
      <div>
        <div className="header">
          <Header authenticated={this.state.authenticated} />
        </div>
        <div className={"main-content " + container}>
          {this.props.children}
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    )
  }
}

export default DefaultLayout;

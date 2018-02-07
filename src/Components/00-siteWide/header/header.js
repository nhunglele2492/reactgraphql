import React, { Component } from 'react';

import Navigation  from './navigation/navigation';
// eslint-disable-next-line
import data  from './data';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo"><a href="/" title="Logo"><img src={require("../../../Assets/images/logo.png")} alt=""/></a></div>
          <nav>
            <Navigation items={data} />
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;

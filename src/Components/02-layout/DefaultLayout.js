import React from 'react';
// SiteWide
import Header from '../00-siteWide/header/header';
import Footer from '../00-siteWide/footer/footer';

class DefaultLayout extends React.Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
    };
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
          <Header/>
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

import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          Create By NhungLele@1992
          <Link to="/home">Home</Link>
        </div>
      </div>
    );
  }
}

export default Footer;

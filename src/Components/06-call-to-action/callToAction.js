import React, { Component } from 'react';

class Cta extends Component {
  render() {
    return(
      <div className="block-cta ">
        <div className="block-cta__inner  bg--light-white">
          <div className="container">
            <div className="block-cta__content">
              <h2 className="block-cta__title">What is Lorem Ipsum?</h2>
              <div className="block-cta__body"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></div>
              <div className="block-cta__link"><a className="btn" href="/">Visit the Marketplace</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cta;

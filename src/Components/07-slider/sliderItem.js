import React, { Component } from 'react';


class SlideItem extends Component {
  render() {
    return (
        <div className="featured-slider-1__slide bg--dark-black--overlay text-light">
          <div className="featured-slider-1__image">
            <img src={this.props.imageSrc} alt="Cards"/>
          </div>
          <div className="container">
            <div className="featured-slider-1__inner">
              <div className="featured-slider-1__inner__content">
                <h1 className="featured-slider-1__highlight">{this.props.hightlight}</h1>
                <div className="featured-slider-1__group">
                <div className="featured-slider-1__description"> {this.props.description}</div>
                <div className="featured-slider-1__link link-btn-wrap link-btn-wrap--white default btn--outline btn--radius-100 btn--outline-white btn--weight-800"><a href="/" className="">Learn More</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default SlideItem;

import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="hero-banner-1 bg--dark-black--overlay">
        <div className="hero-banner-1__image">
          <img src={this.props.imageSrc} alt="Hero Banner"/>
        </div>
          <div className="hero-banner-1__content text--center">
            <div className="container">
              <h1 className="hero-banner-1__title">{this.props.title}</h1>
              <div className="hero-banner-1__description">{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

class HeroBanner extends Component {
  render() {
    return (
      <Banner
        imageSrc='//unsplash.it/1400/560/'
        title= 'The Freeman Spogli Institute for International Studies'
        description= 'A university-wide research and education institution at Stanford devoted to understanding the problems, policies, and processes that cross international borders and affect lives around the world.' />
    );
  }
}

export default  HeroBanner;

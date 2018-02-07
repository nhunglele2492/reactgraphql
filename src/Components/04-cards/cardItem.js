import React, { Component } from 'react';

class CardItem extends Component {
  render() {
    return (
      <div className="block-card-1__item bg--light-white bg--light">
        <div className="block-card-1__image">
          <img src={this.props.imageSrc} alt="Cards"/>
        </div>
        <h2 className="block-card-1__title">{this.props.title}</h2>
        <div className="block-card-1__description">{this.props.description}</div>
        <div className="block-card-1__links"><a href="/" className="">Continue Reading</a></div>
      </div>
    )
  }
}

export default CardItem;

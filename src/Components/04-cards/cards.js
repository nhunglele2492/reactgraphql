import React, { Component } from 'react';

import CardItem from './cardItem';

class Cards extends Component {
  render() {
    const createItem = function(itemText, i) {
      return <CardItem key={i} imageSrc = {itemText.imageSrc} title ={itemText.title} description = {itemText.description}/>
    };
    return (
      <div className="block-card-1 bg--light bg--light-beige">
        <div className="container">
          <div className="block-card-1__grid block-card-1__grid--3-items">
            {this.props.items.map(createItem)}
          </div>
        </div>
      </div>
    );
  }
}

export default  Cards;

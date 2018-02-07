import React, { Component } from 'react';

import Slider from 'react-slick';
import SlideItem from './sliderItem';

// var Slider = require('react-slick');

class ReactSlickDemo extends Component {
  render() {
    const createItem = function(itemText, i) {
      return <SlideItem key={i} imageSrc = {itemText.imageSrc} hightlight ={itemText.hightlight} description = {itemText.description}/>
    }

    return (
      <div className="featured-slider-1 slick-dots-white">
        <Slider {...this.props.settings}>
          {this.props.items.map(createItem)}
        </Slider>
      </div>
    );
  }
}

export default  ReactSlickDemo;

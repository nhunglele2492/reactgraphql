import React, { Component } from 'react';

import HeroBanner  from '../Components/03-heroBanner/heroBanner';
import Cards  from '../Components/04-cards/cards';
import ReactSlickDemo  from '../Components/07-slider/slider';
import GridImage  from '../Components/05-grid-image/gridImage';
import Cta  from '../Components/06-call-to-action/callToAction';


const cardList = [
  {
    'imageSrc': '//unsplash.it/960/540',
    'title': 'What is Lorem Ipsum?',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    'imageSrc': '//unsplash.it/960/540',
    'title': 'What is Lorem Ipsum?',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  },
  {
    'imageSrc': '//unsplash.it/960/540',
    'title': 'What is Lorem Ipsum?',
    'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  }
]


const sliderList = [
  {
    'imageSrc': '//unsplash.it/1400/500/',
    'hightlight': 'THE NEXT BIG THING IN IS WAITING FOR YOU',
    'description': "'Trust Cypress' broad portfolio of automotive-grade MCU, memory, and connectivity solutions to bring your ideas to life."
  },
  {
    'imageSrc': '//unsplash.it/1400/500/',
    'hightlight': 'IoT Revolution.'
  },
  {
    'imageSrc': '//unsplash.it/1400/500/',
    'hightlight': 'Need Wired with us',
    'description': "Trust Cypress' broad portfolio of automotive-grade MCU, memory, and connectivity solutions to bring your ideas to life."
  }
]


const gridImageList = [
  {
    'imageSrc': '//unsplash.it/960/540/',
    'title': 'The Wedding',
    'description': 'Lorem ipsum dolor sit a met'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/',
    'title': 'The Wedding',
    'description': 'Lorem ipsum dolor sit a met'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  },
  {
    'imageSrc': '//unsplash.it/960/540/'
  }
]




class Home extends Component {
  constructor(props) {
    super(props)
    this.settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  }

  render() {
    return (
      <div className="home-page">
      <HeroBanner />
      <Cta />
      <Cards items={cardList}/>
      <GridImage items={gridImageList}/>
      <ReactSlickDemo settings = {this.settings} items= {sliderList}/>
      </div>
    );
  }
}

export default Home;

import React from 'react'
import { Link } from 'react-router-dom'

export default class Banner extends React.Component {
  render() {
    return (
      <Link
        to={`/banner/detail/${this.props.banner.id}`}
      >
        <div className="hero-banner-1 bg--dark-black--overlay">
          <div className="hero-banner-1__image">
            <img src={this.props.banner.imageUrl} alt="Hero Banner"/>
          </div>
            <div className="hero-banner-1__content text--center">
              <div className="container">
                <h1 className="hero-banner-1__title">{this.props.banner.title}</h1>
                <div className="hero-banner-1__description">{this.props.banner.description}</div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

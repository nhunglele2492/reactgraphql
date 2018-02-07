import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavLink extends Component {
  render() {
    return <Link to={this.props.url}>{this.props.text}</Link>
  }
}

class NavItem extends Component {
  generateLink() {
    return <NavLink  url={this.props.url} text= {this.props.text}/>
  }

  generateSubMenu() {
    return(
      <Navigation items={this.props.submenu} />
    )
  }

  generateContent() {
    var content = [this.generateLink()];

    if(this.props.submenu) {
      content.push(this.generateSubMenu());
    }
    return content;
  }

  render() {
    var content = this.generateContent();

    return (
      <li>{content}</li>
    )
  }
}

class Navigation extends Component {
  generateItem(item, i){
    return <NavItem key={i} text={item.text} url={item.url} submenu={item.submenu}/>
  }
  render() {
    var items = this.props.items.map(this.generateItem);
    return(
      <ul>{items}</ul>
    )
  }
}

export default Navigation;

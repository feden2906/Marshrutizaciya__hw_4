import React, {Component} from 'react';
import './Header.css'
import NavItem from "../navItem/NavItem";

class Header extends Component {

  nav = ['Користувачі', 'Пости', 'Фото', 'Коменти']

  render() {
    const {...props} = this.props
    return (
        <div className='nav'>
          {this.nav.map(value => <NavItem item={value} key={value} props={props}/>)}
        </div>
    );
  }
}

export default Header;
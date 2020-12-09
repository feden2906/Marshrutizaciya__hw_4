import React, {Component} from 'react';
import './NavItem.css'

class NavItem extends Component {

  render() {
    const {item, props:{Router, NavLink}} = this.props
    return (
        <Router>
          <div className='navItem'>
            <NavLink to={`/${item}`}><h2>{item}</h2></NavLink>
          </div>
        </Router>
    )
  }
}

export default NavItem;
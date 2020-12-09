import React, {Component} from 'react';
import './Header.css'
import NavItem from "../navItem/NavItem";

const Header = ()=> {

  const nav = ['Користувачі', 'Пости', 'Фото', 'Коменти']


    return (
        <div className='nav'>
          {nav.map(value => <NavItem item={value} key={value}/>)}
        </div>
    );
}

export default Header;

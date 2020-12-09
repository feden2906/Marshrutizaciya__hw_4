import React, {Component} from 'react';
import './NavItem.css'
import {NavLink} from "react-router-dom";

const NavItem = ({item}) => {
    return (
        <div className='navItem'>
            <NavLink to={`/${item}`}><h2>{item}</h2></NavLink>
        </div>
    )
}

export default NavItem;

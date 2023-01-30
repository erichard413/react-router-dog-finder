import React from 'react';
import {BrowserRouter, NavLink, Link} from 'react-router-dom';
import DogList from './DogList';
import './Nav.css'

const Nav = () => {
    return (
        <div className="Nav">
            <Link  to={`/dogs`}>Home</Link>
            {DogList.dogs.map(dog => <NavLink to={`/dogs/${dog.name}`} key={dog.name}>{dog.name}</NavLink>)}
        </div>
    )
}

export default Nav;
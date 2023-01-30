import React from 'react';
import DogList from './DogList';
import {Link} from 'react-router-dom';
import './Dogs.css';

const Dogs = () => {
    return (
        <div>
            <h1>Welcome to Erik's Furry Friends!</h1>
            <ul className="marquee-content">
                {DogList.dogs.map(dog => <li className='marquee-item'><Link to={`/dogs/${dog.name}`} key={dog.name}><img className='marquee-image' src={dog.src} alt={dog.name}/></Link></li>)}
                {DogList.dogs.map(dog => <li className='marquee-item'><Link to={`/dogs/${dog.name}`} key={dog.name}><img className='marquee-image' src={dog.src} alt={dog.name}/></Link></li>)}
                {DogList.dogs.map(dog => <li className='marquee-item'><Link to={`/dogs/${dog.name}`} key={dog.name}><img className='marquee-image' src={dog.src} alt={dog.name}/></Link></li>)}
                {DogList.dogs.map(dog => <li className='marquee-item'><Link to={`/dogs/${dog.name}`} key={dog.name}><img className='marquee-image' src={dog.src} alt={dog.name}/></Link></li>)}
            </ul>
            
        </div>
    )
}

export default Dogs;
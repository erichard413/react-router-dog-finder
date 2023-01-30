import React from 'react';
import {useParams, Navigate} from 'react-router-dom';
import DogList from './DogList';
import './Dog.css';

const Dog = () => {
    const {name} = useParams();
    const dog = DogList.dogs.filter(d => 
        d.name == name
    )

    if(!dog[0]) {
        return (
            <Navigate to="/dogs" replace/>
        )
    }

    return (
        <div className="Dog">
            <h1>{dog[0].name}</h1>
            <ul className="Dog-details-ul">
                <li>Age: {dog[0].age}</li>
                {dog[0].facts.map(fact => <li key={dog[0].facts.indexOf(fact)}>{fact}</li>)}
            </ul>
            <img src={dog[0].src} alt={dog[0].name} />
        </div>
    )
}

export default Dog;
import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';
const title = '';

const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />



const images = [];
for(let animal in animals){
  images.push(<img
  key={animal}
  className ='animal'
  alt = {animal}
  src = {animals[animal].image}
  aria-label = {animal}
  role ='button' />
  )
}

const displayFact = (e) => {
  const nameAnimal = e.target.alt;
  animals.starfish.facts
};

const animalFacts = (
  <div>
  <h1>{title === '' ? 'Click an animal for fun facts!' : title}</h1>
    {background}
    <div>
      {images}
    </div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));
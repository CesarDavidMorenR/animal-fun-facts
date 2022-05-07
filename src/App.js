import { animals } from "./cou/animals.js";
import './cou/styles.css';

function App() {

  const title = "";

   const background = (
     <img className="background" alt="ocean" src="./cou/assets/OLP.jpg" />
   );

  const displayFact = (e) => {
    const animalInfo = e.target.alt;
    const selectedAnimal = animals[animalInfo];
    const randIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
    const funFact = selectedAnimal.facts[randIndex];

    document.getElementById("fact").innerHTML = funFact;
  };

  const images = [];
  for (let animal in animals) {
    images.push(
      <img
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role="button"
        onClick={displayFact}
      />
    );
  }

  const showBackground = true;



  return (

    <div>
      {showBackground === true ? background : images}
      <h1>{title === "" ? "Click an animal for fun facts!" : title}</h1>
      <div className="animals">
        <p id="fact"></p>
        {images}
      </div>
    </div>
  );
}

export default App;

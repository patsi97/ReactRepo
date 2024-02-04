import {animals} from "./animals";
import React from "react";

//MISSING RETURN STATEMENT

function AnimalFunFacts() {
  const title = "";
  const showBackground = true;

  const background = (
      <img src="/images/ocean.jpg" className="background" alt="ocean"/>
  );

  const images = [];

  for (const animal in animals) {
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

  const animalFacts = (
      <div>
        <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
        {showBackground == true &&
            background}
        <div className="animals">{images}</div>
        <p id="fact"></p>
      </div>
  );

  function displayFact(e) {
    <p id="fact"></p>;
    const selectedAnimal = e.target.alt;
    const randomIndex = Math.floor(Math.random() * 3);
    const funFact = animals[selectedAnimal].facts[randomIndex];
    const factElement = document.getElementById("fact");
    factElement.innerHTML = funFact;
  }
}

export default AnimalFunFacts;

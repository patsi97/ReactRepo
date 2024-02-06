import React, { useState, useEffect } from "react";
import Bengal from "./images/Bengal.jpg";
import NorweiganForest from "./images/NorweiganForest.jpg";
import Persian from "./images/Persian.JPG";
import Racoon from "./images/Racoon.jpg";
import ScotischFold from "./images/ScotischFold.jpg";
import Siamese from "./images/Siamese.jpg";

const CATPATHS = [
    Bengal, NorweiganForest, Persian, Racoon, ScotischFold, Siamese
];

function Cats() {
  const [currentCat, setCurrentCat] = useState(0);
  const [favoriteCat, setFavoriteCat] = useState(0);
  const src = CATPATHS[currentCat];

  const favoriteChangeHandler = (event) => {
    setFavoriteCat(parseInt(event.target.value));
  }

  const resetFavoriteHandler = () => {
    setFavoriteCat(0);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCat(prevCat => {
        const nextCat = prevCat + 1;
        return nextCat % CATPATHS.length;
      });
    }, 3000)
    return () => clearInterval(intervalId);
  }, []);


  return (
      <>
        <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
          <h1>Random GADSE</h1>
          <img alt="Guinea Pigs Slideshow" src={src} className={currentCat === favoriteCat? "favorite" : ""}/>
        </div>
        <div data-testid="guineaPigsForm" id="guineaPigsForm">
          <label>Choose Your Favorite GADSE:
            <select value={favoriteCat} onChange={favoriteChangeHandler}>
              <option value="0">Bengal</option>
              <option value="1">Norweigan Forest</option>
              <option value="2">Persian</option>
              <option value="3">Schnitzel</option>
              <option value="4">Scotisch Fold</option>
              <option value="5">Siamese</option>
            </select>
          </label>
          <button onClick={resetFavoriteHandler}>Reset Favorite</button>
        </div>
      </>
  );
}

export default Cats;
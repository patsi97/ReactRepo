import React, { useState, useEffect } from "react";
import CatsForm from "./CatsForm.js";
import CatsSlideShow from "./CatsSlideShow.js";

const CATPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

function CatsContainer() {
  const [currentCat, setCurrentCat] = useState(0);
  const [favoriteCat, setFavoriteCat] = useState(0);
  const src = CATPATHS[currentCat];

  const favoriteChangeHandler = (event) => {
    setFavoriteCat(parseInt(event.target.value));
  };

  const resetFavoriteHandler = () => {
    setFavoriteCat(0);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCat((prevGP) => {
        const nextGP = prevGP + 1;
        return nextGP % CATPATHS.length;
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
      <>
        <CatsSlideShow src={src} isFavorite={currentCat === favoriteCat} />
        <CatsForm
            favoriteGP={favoriteCat}
            onSelectFavorite={favoriteChangeHandler}
            onResetFavorite={resetFavoriteHandler}
        />
        <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
          <h1>Cute Guinea Pigs</h1>
          <img
              alt="Guinea Pigs Slideshow"
              src={src}
              className={currentCat === favoriteCat ? "favorite" : ""}
          />
        </div>
        <div data-testid="guineaPigsForm" id="guineaPigsForm">
          <label>
            Choose Your Favorite Gadse:
            <select value={favoriteCat} onChange={favoriteChangeHandler}>
              <option value="0">Alex</option>
              <option value="1">Izzy</option>
              <option value="2">Brandon</option>
              <option value="3">DJ</option>
            </select>
          </label>
          <button onClick={resetFavoriteHandler}>Reset Favorite</button>
        </div>
      </>
  );
}

export default CatsContainer;

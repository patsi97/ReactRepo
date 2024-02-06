import React from "react";

function CatsSlideShow({src, isFavorite}) {
  return (
      <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
        <h1>GADSE</h1>
        <img alt="Guinea Pigs Slideshow" src={src} className={isFavorite? "favorite" : ""}/>
      </div>
  );

}

export default CatsSlideShow;
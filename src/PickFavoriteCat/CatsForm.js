import React from "react";

function CatsForm({favoriteCat, onSelectFavorite, onResetFavorite}) {
  return (
      <div data-testid="guineaPigsForm" id="guineaPigsForm">
        <label>Choose Your Favorite Cat:
          <select value={favoriteCat} onChange={onSelectFavorite}>
            <option value="0">Alex</option>
            <option value="1">Izzy</option>
            <option value="2">Brandon</option>
            <option value="3">DJ</option>
          </select>
        </label>
        <button onClick={onResetFavorite}>Reset Favorite</button>
      </div>
  );
}

export default CatsForm;
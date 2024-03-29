import React from "react";
import SearchBar from "./Components/SearchBar";
import ProduceData from "./Data.json";
import "./GroceryCart.css";

function GroceryCart() {
  return (
    <div className="SearchBooks">
      <SearchBar placeholder="Search for Products..." data={ProduceData} />
    </div>
  );
}

export default GroceryCart;

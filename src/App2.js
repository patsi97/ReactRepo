import "./App.css";
import AppFunction from "./AppFunction/AppFunction.js";
import ColorPicker from "./ColorPicker/ColorPicker.js";
import GroceryCart from "./GroceryCart/GroceryCart.js";
import React, { useState } from "react";
import PassingThoughtsApp from "./PassingThoughts/PassingThoughtsApp.js";
import PickYourFavoriteCatApp from "./PickFavoriteCat/PickYourFavoriteCatApp.js";
import Game from "./RockPaperScissors/Game.js";
import FoodOrderApp from "./FoodOrderForm/FoodOrderApp.js";
import Home from "./Navigation/pages/Home.js";
import Root from "./components/root/index.js";

import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

const appRouter = (props) =>
  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="ReactRepo" element={<Home />} />
        <Route index element={<Home />} />
        <Route
          path="colorpicker"
          element={
            <ColorPicker setColor={props.setColor} color={props.color} />
          }
        />
        <Route path="grocerycart" element={<GroceryCart />} />
        <Route path="tasklist" element={<AppFunction />} />
        <Route path="passinghoughts" element={<PassingThoughtsApp />} />
        <Route path="favoritecat" element={<PickYourFavoriteCatApp />} />
        <Route path="rockpaperscissors" element={<Game />} />
        <Route path="orderfood" element={<FoodOrderApp />} />
      </Route>
    )
    //{ basename: "/" }
  );

function App2() {
  const [background, setBackground] = useState("");
  return (
    <RouterProvider
      router={appRouter({ color: background, setColor: setBackground })}
    />
  );
}

export default App2;

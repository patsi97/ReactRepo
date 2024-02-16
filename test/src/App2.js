//import './App.css';
import AppFunction from "./AppFunction/AppFunction";
import ColorPicker from "./ColorPicker/ColorPicker";
import GroceryCart from "./GroceryCart/GroceryCart";
import Counter from "./CounterWithEffect/Counter";
import Timer from "./CounterWithEffect/Timer";
import React, {useState} from "react";
import PassingThoughtsApp from "./PassingThoughts/PassingThoughtsApp";
import PickYourFavoriteCatApp from "./PickFavoriteCat/PickYourFavoriteCatApp";
import Game from "./RockPaperScissors/Game";
import FoodOrderApp from "./FoodOrderForm/FoodOrderApp";
import Home from "./Navigation/pages/Home";
import Navbar from "./Navigation/NavBar";
import AppColorPicker from "./ColorPicker/AppColorPicker";
import Root from "./components/root";

import {
  RouterProvider,
  Route,
  createRoutesFromElements, createBrowserRouter
} from "react-router-dom";
import SearchBar from "./GroceryCart/SearchBar";

const appRouter = (props) => createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root/>}>
          <Route path="ReactRepo" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path="colorpicker"
                 element={<ColorPicker setColor={props.setColor}
                                          color={props.color}/>}/>
          <Route path="grocerycart" element={<SearchBar/>}/>
          <Route path="tasklist" element={<AppFunction/>}/>
          <Route path="passinghoughts" element={<PassingThoughtsApp/>}/>
          <Route path="favoritecat" element={<PickYourFavoriteCatApp/>}/>
          <Route path="rockpaperscissors" element={<Game/>}/>
          <Route path="orderfood" element={<FoodOrderApp/>}/>
        </Route>
    ));

function App2() {
  const [background, setBackground] = useState("");
  return (
      <RouterProvider
          router={appRouter({color: background, setColor: setBackground})}/>
  );
}

export default App2;

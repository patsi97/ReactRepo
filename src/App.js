import './App.css';
import AppQuizNavBar from "./QuizNavBar/AppQuizNavBar.js";
import AppFunction from "./AppFunction/AppFunction.js";
import ColorPicker from "./ColorPicker/ColorPicker.js";
import GroceryCart from "./GroceryCart/GroceryCart.js";
import PersonalPizza from "./PersonalPizza/PersonalPizza.js";
import Contact from "./Contact/Contact.js";
import Counter from "./CounterWithEffect/Counter.js";
import Timer from "./CounterWithEffect/Timer.js";
import React, {useState} from "react";
import PassingThoughtsApp from "./PassingThoughts/PassingThoughtsApp.js";
import PickYourFavoriteCatApp from "./PickFavoriteCat/PickYourFavoriteCatApp.js";
import VideoPlayerApp from "./VideoPlayer/VideoPlayerApp.js";
import Game from "./RockPaperScissors/Game.js";
import FoodOrderApp from "./FoodOrderForm/FoodOrderApp.js";

export default function App() {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  const [show6, setShow6] = useState(false)
  const [show7, setShow7] = useState(false)
  const [show8, setShow8] = useState(false)
  const [show9, setShow9] = useState(false)
  const [show10, setShow10] = useState(false)
  const [show11, setShow11] = useState(false)
  const [color, setColor] = useState('Tomato');

  return (
      <div className="container">
        <Counter/>
        <Timer/>
        <div className="PickerColor">
          <button onClick={() => setShow1(!show1)}>Quiz Navigator Bar</button>
          {show1 ? <AppQuizNavBar/> : null} </div>
        <div className="PickerColor">
          <button onClick={() => setShow2(!show2)}>App picker Color</button>
          {show2 ? <ColorPicker color={color} setColor={setColor}/> : null} </div>
        <div className="GroceryCart">
          <button onClick={() => setShow3(!show3)}>Grocery Cart</button>
          {show3 ? <GroceryCart/> : null} </div>
        <div className="PersonalPizza">
          <button onClick={() => setShow4(!show4)}>Personal Pizza</button>
          {show4 ? <PersonalPizza/> : null} </div>
        <div className="Contact">
          <button onClick={() => setShow5(!show5)}>Contact</button>
          {show5 ? <Contact/> : null}  </div>
        <div className="TaskApp">
          <button onClick={() => setShow6(!show6)}>Task List</button>
          {show6 ? <AppFunction/> : null}  </div>
        <div className="PassingThoughts">
          <button onClick={() => setShow7(!show7)}>Passing Thoughts</button>
          {show7 ? <PassingThoughtsApp/> : null}  </div>
        <div className="PickYourCat">
          <button onClick={() => setShow8(!show8)}>Pick your favorite Cat</button>
          {show8 ? <PickYourFavoriteCatApp/> : null}  </div>
        <div className="VideoPlayer">
          <button onClick={() => setShow9(!show9)}>Video Player</button>
          {show9 ? <VideoPlayerApp/> : null}  </div>
        <div className="Game">
          <button onClick={() => setShow10(!show10)}>Game</button>
          {show10 ? <Game/> : null}  </div>
        <div className="FoodOrder">
          <button onClick={() => setShow11(!show10)}>Food Order</button>
          {show11 ? <FoodOrderApp/> : null}  </div>
      </div>

  );
}



import './App.css';
import AppQuizNavBar from "./QuizNavBar/AppQuizNavBar";
import AppFunction from "./AppFunction/AppFunction";
import AppColorPicker from "./ColorPicker/AppColorPicker";
import Forecast from "./Forecast/Forecast";
import GroceryCart from "./GroceryCart/GroceryCart";
import PersonalPizza from "./PersonalPizza/PersonalPizza";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import Contact from "./Contact/Contact";
import Counter from "./CounterWithEffect/Counter";
import Timer from "./CounterWithEffect/Timer";
import {ButtonCounter} from "./ButtonCounter/ButtonCounter";
import React, {useState} from "react";

export default function App() {
  const [show1, setShow1] = useState({})
  const [show2, setShow2] = useState({})
  const [show3, setShow3] = useState({})
  const [show4, setShow4] = useState({})
  const [show5, setShow5] = useState({})
  const [show6, setShow6] = useState({})
  /* const handleClick= (input) => {
     setShow(prevState => ({...prevState, [input]: !prevState[input] }));
  } {
          <button onClick={ handleClick("Quiz")}>Quiz Navigation Bar</button>
        }
        {
          show["Quiz"]&&
              <AppQuizNavBar/>
        }
  */

  return (
      <div className="container">
        <Counter/>
        <Timer/>
        <div className="QuizNavBar">
          <button onClick={() => setShow1(!show1)}>Quiz Nav Bar</button>
          {show1 ? <AppQuizNavBar/> : null} </div>
        <div className="PickerColor">
          <button onClick={() => setShow2(!show2)}>App picker Color</button>
          {show2 ? <AppColorPicker/> : null} </div>
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
          <button onClick={() => setShow6(!show6)}>Contact</button>
          {show6 ? <AppFunction/> : null}  </div>

      </div>
  );
}



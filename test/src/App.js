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

export default function App() {
  return (
      <div className="container">
        <AppQuizNavBar/>
        <AppFunction/>
        <AppColorPicker/>
        <Forecast/>
        <GroceryCart/>
        <PersonalPizza/>
        <PhoneNumber/>
        <Contact/>
        <Counter/>
        <Timer/>
        <ButtonCounter/>
      </div>
  );
}



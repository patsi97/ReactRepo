import React from "react";
import QuizNavBar from "./QuizNavBar.js";
import {questions} from "./dataModel";

export default function App() {
  return <QuizNavBar questions={questions}/>;
}

import React from "react";
import QuizNavBar from "./QuizNavBar.js";
import {questions} from "./dataModel";

export default function AppQuizNavBar() {
  return <QuizNavBar questions={questions}/>;
}

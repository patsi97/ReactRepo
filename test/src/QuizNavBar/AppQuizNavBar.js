import React from "react";
import QuizNavBar from "./QuizNavBar";
import {questions} from "./dataModel";

export default function AppQuizNavBar() {
  return <QuizNavBar questions={questions}/>;
}

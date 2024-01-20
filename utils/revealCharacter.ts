// useRevealCharacter.js

import { useDispatch, useSelector } from "react-redux";
import { setDisplayAnswer } from "../store/TrivvyaSlice";

const UseRevealCharacter = () => {
  const trueAnswer = useSelector((state) => state.quiz.trueAnswer);
  const displayAnswer = useSelector((state) => state.quiz.trueAnswer);

  const dispatch = useDispatch();

  const revealCharacter = (character) => {
    console.log("in reveal character");
    if (trueAnswer.includes(character)) {
      console.log("in true answer");

      dispatch(setDisplayAnswer(character));
    }
  };

  return revealCharacter;
};

export default UseRevealCharacter;

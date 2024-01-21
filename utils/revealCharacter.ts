// useRevealCharacter.js

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setDisplayAnswer } from "../store/TrivvyaSlice";

const UseRevealCharacter = () => {
  const trueAnswer = useAppSelector((state) => state.quiz.trueAnswer);

  const dispatch = useAppDispatch();

  const revealCharacter = (character: string) => {
    console.log("in reveal character");
    if (trueAnswer.includes(character)) {
      console.log("in true answer");

      dispatch(setDisplayAnswer(character));
    }
  };

  return revealCharacter;
};

export default UseRevealCharacter;

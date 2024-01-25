// useRevealCharacter.js

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setDisplayAnswer, decreaseTry } from "../store/TrivvyaSlice";

const UseRevealCharacter = () => {
  const trueAnswer = useAppSelector((state) => state.quiz.trueAnswer);
  const dispatch = useAppDispatch();

  const revealCharacter = (character: string) => {
    if (trueAnswer.includes(character)) {
      dispatch(setDisplayAnswer(character));
    } else {
      dispatch(decreaseTry());
    }
  };

  return revealCharacter;
};

export default UseRevealCharacter;

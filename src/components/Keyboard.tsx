import Button from "../../Assets/Svgs/Button";
import UseRevealCharacter from "../../utils/revealCharacter";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { setDisplayAnswer, setGameOver } from "../../store/TrivvyaSlice";

import Modal from "../../utils/GameoverModal";

function QwertyKeyboard() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.quiz.loading);
  const trueAnswer = useAppSelector((state) => state.quiz.trueAnswer);
  const gameOver = useAppSelector((state) => state.quiz.gameOver);
  const qwertyLayout = ["0123456789", "qwertyuiop", "asdfghjkl", "zxcvbnm-."];
  const revealCharacter = UseRevealCharacter();
  const triesLeft = useAppSelector((state) => state.quiz.triesLeft);

  if (triesLeft === 0 || gameOver) {
    dispatch(setDisplayAnswer(trueAnswer));
    dispatch(setGameOver(true));
  }
  const handleButtonClick = (letter: string) => {
    revealCharacter(letter);
  };

  return (
    <div className="flex flex-row md:flex-col gap-y-1">
      {gameOver && <Modal />}

      {qwertyLayout.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-col md:flex-row justify-center"
        >
          {row.split("").map((letter, index) => (
            <Button
              key={index}
              text={letter}
              onClick={() => handleButtonClick(letter)}
              disabled={loading}
              className="cursor-pointer mx-1 transition duration-300 ease-in-out transform hover:scale-125 h-20 w-20 md:h-20 md:w-20"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default QwertyKeyboard;

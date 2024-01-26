import Button from "../../Assets/Svgs/Button";
import UseRevealCharacter from "../../utils/revealCharacter";
import { useAppSelector } from "../../hooks/hooks";
import { useState } from "react";
import Modal from "../../utils/GameoverModal";

function QwertyKeyboard() {
  const [showModal, setShowModal] = useState(false);
  const loading = useAppSelector((state) => state.quiz.loading);
  const qwertyLayout = ["0123456789", "qwertyuiop", "asdfghjkl", "zxcvbnm-."];
  const revealCharacter = UseRevealCharacter();
  const triesLeft = useAppSelector((state) => state.quiz.triesLeft);
  const handleButtonClick = (letter: string) => {
    if (triesLeft === 0) {
      setShowModal(true);
    } else {
      revealCharacter(letter);
    }
  };
  return (
    <div className="flex flex-row md:flex-col gap-y-1">
      {showModal && <Modal />}

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

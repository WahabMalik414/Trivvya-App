import Button from "../../Assets/Svgs/Button";
import UseRevealCharacter from "../../utils/revealCharacter";
import { useAppSelector } from "../../hooks/hooks";
import { useState } from "react";
import Modal from "../../utils/GameoverModal";
function QwertyKeyboard() {
  const [showModal, setShowModal] = useState(false);

  const qwertyLayout = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const revealCharacter = UseRevealCharacter();
  const triesLeft = useAppSelector((state) => state.quiz.triesLeft);
  const handleButtonClick = (letter: string) => {
    if (triesLeft === 0) {
      setShowModal(true);
      //alert("game over");
    } else {
      revealCharacter(letter);
    }
  };
  return (
    <div className="flex flex-col h-28 gap-y-2">
      {showModal && <Modal />}

      {qwertyLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.split("").map((letter, index) => (
            <Button
              key={index}
              text={letter}
              onClick={() => handleButtonClick(letter)}
              className="cursor-pointer mx-1 transition duration-300 ease-in-out transform hover:scale-125 h-9 w-9 md:h-20 md:w-20"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default QwertyKeyboard;

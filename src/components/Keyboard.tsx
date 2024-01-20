import React, { useContext } from "react";
import Button from "../../Assets/Svgs/Button";
import { TrivvyaContext, TrivvyaContextType } from "../TrivvyaContext";

function QwertyKeyboard() {
  const { revealCharacter } = useContext(TrivvyaContext) as TrivvyaContextType;

  // QWERTY layout for the keyboard
  const qwertyLayout = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  return (
    <div className="flex flex-col gap-y-2">
      {qwertyLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.split("").map((letter, index) => (
            <Button
              key={index}
              text={letter}
              onClick={() => revealCharacter(letter)}
              className="cursor-pointer mx-1 transition duration-300 ease-in-out transform hover:scale-125"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default QwertyKeyboard;

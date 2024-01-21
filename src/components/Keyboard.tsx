import Button from "../../Assets/Svgs/Button";
import UseRevealCharacter from "../../utils/revealCharacter";
function QwertyKeyboard() {
  const qwertyLayout = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  const revealCharacter = UseRevealCharacter();
  return (
    <div className="flex flex-col h-28 gap-y-2">
      {qwertyLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.split("").map((letter, index) => (
            <Button
              key={index}
              text={letter}
              onClick={() => revealCharacter(letter)}
              className="cursor-pointer mx-1 transition duration-300 ease-in-out transform hover:scale-125 h-9 w-9 md:h-20 md:w-20"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default QwertyKeyboard;

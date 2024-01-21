import Level from "../../Assets/Svgs/Level";
import { setDifficulty } from "../../store/TrivvyaSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
export default function LevelPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLevelClick = (selectedDifficulty: string) => {
    dispatch(setDifficulty(selectedDifficulty));
    navigate("/category");
  };
  return (
    <div className="flex  min-h-screen">
      <div className="flex-1 bg-TrivvyaBlue justify-center items-center">
        <p className="font-sans text-6xl font-bold leading-tight text-white text-center mt-4">
          PICK THE LEVEL
        </p>
        <div className="flex flex-col items-center gap-y-5 mt-36 w-full px-5 md:px-0 md:mt-10">
          <div onClick={() => handleLevelClick("easy")}>
            <Level
              difficulty="EASY"
              className="h-28 md:h-36 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
          <div onClick={() => handleLevelClick("medium")}>
            <Level
              difficulty="MEDIUM"
              className="h-28 md:h-36 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
          <div onClick={() => handleLevelClick("hard")}>
            <Level
              difficulty="HARD"
              className="h-28 md:h-36 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import { useContext } from "react";
import Level from "../../Assets/Svgs/Level";
import { Link } from "react-router-dom";
import { TrivvyaContext, TrivvyaContextType } from "../TrivvyaContext";

export default function LevelPage() {
  const { setDifficulty } = useContext(TrivvyaContext) as TrivvyaContextType;
  const handleLevelClick = (selectedDifficulty: string) => {
    setDifficulty(selectedDifficulty);
  };
  return (
    <div className="flex  min-h-screen">
      <div className="flex-1 bg-TrivvyaBlue justify-center items-center">
        <p className="font-sans text-6xl font-bold leading-tight text-white text-center mt-4">
          PICK THE LEVEL
        </p>
        <div className="flex flex-col items-center gap-y-5 mt-36 w-full px-5 md:px-0 md:mt-10">
          <Link to={`/category`} onClick={() => handleLevelClick("easy")}>
            <Level difficulty="EASY" className="h-28 md:h-36" />
          </Link>
          <Link to={`/category`} onClick={() => handleLevelClick("medium")}>
            <Level difficulty="MEDIUM" className="h-28 md:h-36" />
          </Link>
          <Link to={`/category`} onClick={() => handleLevelClick("hard")}>
            <Level difficulty="HARD" className="h-28 md:h-36" />
          </Link>
        </div>
      </div>
    </div>
  );
}

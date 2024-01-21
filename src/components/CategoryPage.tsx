import Level from "../../Assets/Svgs/Level";
import { useNavigate } from "react-router-dom";
import { setCategory } from "../../store/TrivvyaSlice";
import { useAppDispatch } from "../../hooks/hooks";
export default function CategoryPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleCategoryClick = (selectedCategory: string) => {
    dispatch(setCategory(selectedCategory));
    navigate("/puzzle");
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 min-h-screen bg-TrivvyaBlue">
        <p className="font-sans text-6xl font-bold leading-tight text-white text-center">
          CHOOSE A CLUE
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-5 px-5  md:gap-x-5">
          <div className="flex flex-col items-center gap-y-5">
            <Level
              difficulty="General Knowledge"
              onClick={() => handleCategoryClick("9")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Books"
              onClick={() => handleCategoryClick("10")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Video Games"
              onClick={() => handleCategoryClick("15")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Science & Nature"
              onClick={() => handleCategoryClick("17")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Computers"
              onClick={() => handleCategoryClick("18")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center mt-5 gap-y-5 md:mt-0">
            <Level
              difficulty="Sports"
              onClick={() => handleCategoryClick("21")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Geography"
              onClick={() => handleCategoryClick("22")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="History"
              onClick={() => handleCategoryClick("23")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Art"
              onClick={() => handleCategoryClick("25")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Animals"
              onClick={() => handleCategoryClick("27")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

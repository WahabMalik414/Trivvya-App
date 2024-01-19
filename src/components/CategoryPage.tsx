import React, { useContext } from "react";
import Level from "../../Assets/Svgs/Level";
import { TrivvyaContextType, TrivvyaContext } from "../TrivvyaContext";
import { useNavigate } from "react-router-dom";

export default function CategoryPage() {
  const { setCategory, generateApiRequest } = useContext(
    TrivvyaContext
  ) as TrivvyaContextType;
  const navigate = useNavigate();
  const handleCategoryClick = (selectedCategory: string) => {
    setCategory(selectedCategory);
    navigate("/puzzle");

    // Generate and use the API request here
    const apiRequest = generateApiRequest();
    console.log("API Request:", apiRequest);
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
              difficulty="General Knowledge 9"
              onClick={() => handleCategoryClick("9")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Books 10"
              onClick={() => handleCategoryClick("10")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Video Games 15"
              onClick={() => handleCategoryClick("15")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Science & Nature 17"
              onClick={() => handleCategoryClick("17")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Computers 18"
              onClick={() => handleCategoryClick("18")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-center mt-5 gap-y-5 md:mt-0">
            <Level
              difficulty="Sports 21"
              onClick={() => handleCategoryClick("21")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Geography 22"
              onClick={() => handleCategoryClick("22")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="History 23"
              onClick={() => handleCategoryClick("23")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Art 25"
              onClick={() => handleCategoryClick("25")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
            <Level
              difficulty="Animals 27"
              onClick={() => handleCategoryClick("27")}
              className="h-28 md:h-30 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

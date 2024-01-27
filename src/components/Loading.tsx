import Category from "../../Assets/Svgs/Category";
import Puzzle from "../../Assets/Svgs/Puzzle";
import Keyboard from "./Keyboard";
import Home from "../../Assets/Svgs/Home";
import Answer from "../../Assets/Svgs/Answer";
export default function Loading() {
  return (
    <div className="relative">
      <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
        <div className="flex items-center">
          <span className="text-3xl mr-4">Loading</span>
          <svg
            className="animate-spin h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex  min-h-screen">
        <div className="flex flex-col bg-TrivvyaBlue w-screen">
          <div className="flex md:gap-x-5 justify-center mb-3">
            <Category
              className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32"
              disabled={true}
            />
            <Answer
              className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32"
              disabled={true}
            />
            <Puzzle
              className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32"
              disabled={true}
            />
            <Home className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32" />
          </div>
          <div className="flex flex-col text-center md:px-10 gap-y-2">
            <p className="text-white text-3xl md:text-5xl font-bold">
              Solve the puzzle
            </p>
            <p className="text-white font-semibold text-xl md:text-2xl">
              Answer a question from top tab to get more tries. Enjoy the game!
            </p>
            <p className="text-white text-3xl md:text-5xl font-bold">CLUE</p>
            <p className="text-white font-semibold text-xl md:text-2xl">
              {/* {loading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) : (
                question
              )} */}
            </p>
            <div className="flex flex-col md:flex-row md:justify-center items-center gap-y-4 md:gap-x-5 md:pr-10">
              <div className="w-fit items-center justify-center whitespace-nowrap rounded-lg bg-chipBlue py-1.5 px-3 font-sans text-lg uppercase text-white">
                <span className="">Retries count: </span>
              </div>
              <div className="w-fit items-center justify-center whitespace-nowrap rounded-lg bg-chipBlue py-1.5 px-3 font-sans text-lg uppercase text-white">
                <span className="">Score: </span>
              </div>
            </div>
            <div className="text-white font-bold text-3xl md:text-6xl"></div>
            <div className="flex justify-center mt-5">
              <Keyboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

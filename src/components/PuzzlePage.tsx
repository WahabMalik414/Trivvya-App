//TODO: Very important: 1) fetch new data once the array has exhausted. 2)utils 3)further functionality.

import { useEffect } from "react";
import he from "he";
import Keyboard from "./Keyboard";
import Category from "../../Assets/Svgs/Category";
import Home from "../../Assets/Svgs/Home";
import Puzzle from "../../Assets/Svgs/Puzzle";
import Answer from "../../Assets/Svgs/Answer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  setQuestion,
  setTrueAnswer,
  setDisplayAnswer,
  setQuestions,
  setLoading,
} from "../../store/TrivvyaSlice";
import generateApiRequest from "../../utils/generateApiRequest";
export default function PuzzlePage() {
  const navigate = useNavigate();
  const questions = useAppSelector((state) => state.quiz.questions);
  const displayAnswer = useAppSelector((state) => state.quiz.displayAnswer);
  const trueAnswer = useAppSelector((state) => state.quiz.trueAnswer);
  const question = useAppSelector((state) => state.quiz.question);
  const category = useAppSelector((state) => state.quiz.category);
  const level = useAppSelector((state) => state.quiz.difficulty);
  const loading = useAppSelector((state) => state.quiz.loading);

  const dispatch = useAppDispatch();
  type ApiResponse = {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
  const fetchPuzzleData = async () => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(generateApiRequest(category, level));
      const data = await response.json();
      console.log(data);
      dispatch(setLoading(false));
      const puzzleData = data.results.filter((result: ApiResponse) => {
        const answer = he.decode(result.correct_answer.toLowerCase());
        return answer.split(" ").length === 1 && !/\d/.test(answer);
      });

      if (puzzleData.length > 0) {
        const newQuestions = puzzleData.map(
          ({
            question,
            correct_answer,
          }: {
            question: string;
            correct_answer: string;
          }) => ({
            question: he.decode(question),
            answer: he.decode(correct_answer.toLowerCase()).split("").join(" "),
          })
        );
        dispatch(setQuestions(newQuestions));

        // Set the first question initially
        const { question, answer } = newQuestions[0];
        dispatch(setQuestion(question));
        dispatch(setTrueAnswer(answer));
      } else {
        console.log("No valid puzzle data found.");
      }
    } catch (error) {
      console.error("Error fetching puzzle data:", error);
      dispatch(setLoading(false));
    }
  };
  const handlePuzzleSolved = () => {
    console.log("Successfully solved");
    console.log("in handle puzzle solved");

    // Find the index of the current question in the questions array
    const currentIndex = questions.findIndex((q) => q.question === question);

    // Check if there are more questions
    if (currentIndex < questions.length - 1) {
      // Move to the next question
      const nextQuestion = questions[currentIndex + 1];
      dispatch(setQuestion(nextQuestion.question));
      dispatch(setTrueAnswer(nextQuestion.answer));

      // Reset the displayAnswer state
      dispatch(
        setDisplayAnswer(
          nextQuestion.answer
            .split("")
            .map((char) => (char === " " ? " " : "_"))
            .join("")
        )
      );
    } else {
      console.log("All questions have been answered. fetching next questions.");
      fetchPuzzleData();
    }
  };
  useEffect(() => {
    if (displayAnswer === trueAnswer) {
      handlePuzzleSolved();
    }
    console.log("here");
  }, [displayAnswer, trueAnswer, questions, question]);

  useEffect(() => {
    fetchPuzzleData();
  }, []);

  useEffect(() => {
    dispatch(setDisplayAnswer("initialize"));
  }, [trueAnswer]);

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="flex  min-h-screen">
        <div className="flex flex-col bg-TrivvyaBlue ">
          <div className="flex md:gap-x-5 justify-center mb-3">
            <Category
              className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32"
              onClick={() => {
                navigate("/category");
              }}
            />
            <Answer className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32" />
            <Puzzle className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32" />
            <Home
              className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="flex flex-col text-center md:px-10 gap-y-2">
            <p className="text-white text-3xl md:text-5xl font-bold">
              Solve the puzzle
            </p>
            <p className="text-white font-semibold text-xl md:text-2xl">
              You get 1 consonant now! Answer Trivia questions to get more
              letters. The sooner you can answer, the more points you score. Get
              3 questions wrong and game over.
            </p>
            <p className="text-white text-3xl md:text-5xl font-bold">CLUE</p>
            <p className="text-white font-semibold text-xl md:text-2xl">
              {question}
            </p>
            <p className="text-white font-semibold text-xl md:text-2xl">
              Level: Easy - 0 consonant. Click “Answer a question” button to get
              more letters.
            </p>
            <div className="text-white font-bold text-3xl md:text-6xl">
              <p>
                {/* {Array.from(answer).map((letter, index) => (
              <span key={index}>{revealCharacter(letter)}</span>
            ))} */}
                {displayAnswer}
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <Keyboard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

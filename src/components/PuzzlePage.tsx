//TODO: Very important: 1) fetch new data once the array has exhausted. 2)utils 3)further functionality.

import React from "react";
import { useEffect } from "react";

import he from "he";
import Keyboard from "./Keyboard";
import Category from "../../Assets/Svgs/Category";
import Home from "../../Assets/Svgs/Home";
import Puzzle from "../../Assets/Svgs/Puzzle";
import Answer from "../../Assets/Svgs/Answer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setQuestion,
  setTrueAnswer,
  setDisplayAnswer,
  setQuestions,
  setLoading,
} from "../../store/trivvyaSlice";
import generateApiRequest from "../../utils/generateApiRequest";
export default function PuzzlePage() {
  const navigate = useNavigate();
  const questions = useSelector((state) => state.quiz.questions);
  const displayAnswer = useSelector((state) => state.quiz.displayAnswer);
  const trueAnswer = useSelector((state) => state.quiz.trueAnswer);
  const question = useSelector((state) => state.quiz.question);
  const category = useSelector((state) => state.quiz.category);
  const level = useSelector((state) => state.quiz.level);
  const loading = useSelector((state) => state.quiz.loading);

  const dispatch = useDispatch();

  const fetchPuzzleData = async () => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
      );
      const data = await response.json();
      console.log(data);
      dispatch(setLoading(false));
      const puzzleData = data.results.filter((result) => {
        const answer = he.decode(result.correct_answer.toLowerCase());
        return answer.split(" ").length === 1 && !/\d/.test(answer);
      });

      if (puzzleData.length > 0) {
        const newQuestions = puzzleData.map(({ question, correct_answer }) => ({
          question: he.decode(question),
          answer: he.decode(correct_answer.toLowerCase()).split("").join(" "),
        }));
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
      console.log("All questions have been answered.");
    }
  };
  useEffect(() => {
    if (displayAnswer === trueAnswer) {
      handlePuzzleSolved();
    }
    console.log("here");
  }, [displayAnswer, trueAnswer, questions, question]);
  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchPuzzleData();
  }, []);

  useEffect(() => {
    dispatch(setDisplayAnswer(0));
  }, [trueAnswer]);

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="flex flex-col bg-TrivvyaBlue h-screen">
        <div className="flex gap-x-5 justify-center mb-3">
          <Category
            className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            onClick={() => {
              navigate("/category");
            }}
          />
          <Answer className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
          <Puzzle className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer" />
          <Home
            className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="flex flex-col text-center gap-y-2 px-10">
          <p className="text-white text-5xl font-bold">Solve the puzzle</p>
          <p className="text-white font-semibold text-2xl">
            You get 1 consonant now! Answer Trivia questions to get more
            letters. The sooner you can answer, the more points you score. Get 3
            questions wrong and game over.
          </p>
          <p className="text-white text-6xl font-bold">CLUE</p>
          <p className="text-white font-semibold text-2xl">{question}</p>
          <p className="text-white font-semibold text-2xl">
            Level: Easy - 0 consonant. Click “Answer a question” button to get
            more letters.
          </p>
          <div className="text-white font-bold text-8xl">
            <p>
              {/* {Array.from(answer).map((letter, index) => (
              <span key={index}>{revealCharacter(letter)}</span>
            ))} */}
              {displayAnswer}
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <Keyboard />
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";
import { useState, useEffect, useContext } from "react";
import { TrivvyaContext } from "../TrivvyaContext";
import { TrivvyaContextType } from "../TrivvyaContext";
import he from "he";
import Button from "../../Assets/Svgs/Button";
import Keyboard from "./Keyboard";
import Category from "../../Assets/Svgs/Category";
import Home from "../../Assets/Svgs/Home";
import Puzzle from "../../Assets/Svgs/Puzzle";
import Answer from "../../Assets/Svgs/Answer";
import { useNavigate } from "react-router-dom";
export default function PuzzlePage() {
  const navigate = useNavigate();
  const { generateApiRequest } = useContext(
    TrivvyaContext
  ) as TrivvyaContextType;
  // State to manage the puzzle data
  const {
    questions,
    setQuestions,
    displayAnswer,
    setTrueAnswer,
    setDisplayAnswer,
    revealCharacter,
    question,
    setQuestion,
    trueAnswer,
  } = useContext(TrivvyaContext) as TrivvyaContextType;

  const fetchPuzzleData = async () => {
    try {
      const response = await fetch(generateApiRequest());
      const data = await response.json();

      const puzzleData = data.results.filter((result) => {
        const answer = he.decode(result.correct_answer.toLowerCase());
        return answer.split(" ").length === 1 && !/\d/.test(answer);
      });

      if (puzzleData.length > 0) {
        const newQuestions = puzzleData.map(({ question, correct_answer }) => ({
          question: he.decode(question),
          answer: he.decode(correct_answer.toLowerCase()).split("").join(" "),
        }));
        setQuestions(newQuestions);

        // Set the first question initially
        const { question, answer } = newQuestions[0];
        setQuestion(question);
        setTrueAnswer(answer);
      } else {
        console.log("No valid puzzle data found.");
      }
    } catch (error) {
      console.error("Error fetching puzzle data:", error);
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
      setQuestion(nextQuestion.question);
      setTrueAnswer(nextQuestion.answer);

      // Reset the displayAnswer state
      setDisplayAnswer(
        nextQuestion.answer
          .split("")
          .map((char) => (char === " " ? " " : "_"))
          .join("")
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
          You get 1 consonant now! Answer Trivia questions to get more letters.
          The sooner you can answer, the more points you score. Get 3 questions
          wrong and game over.
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

import React from "react";
import { useState, useEffect, useContext } from "react";
import { TrivvyaContext } from "../TrivvyaContext";
import { TrivvyaContextType } from "../TrivvyaContext";
import he from "he";
import Button from "../../Assets/Svgs/Button";
import Keyboard from "./Keyboard";
export default function PuzzlePage() {
  const { generateApiRequest } = useContext(
    TrivvyaContext
  ) as TrivvyaContextType;
  // State to manage the puzzle data
  const {
    question,
    setQuestion,
    displayAnswer,
    setTrueAnswer,
    revealCharacter,
  } = useContext(TrivvyaContext) as TrivvyaContextType;

  const fetchPuzzleData = async () => {
    try {
      const response = await fetch(generateApiRequest());
      const data = await response.json();

      // Extract relevant information from API response
      const puzzleData = data.results.filter((result) => {
        const answer = he.decode(result.correct_answer.toLowerCase());
        // Check if the answer is a single word and doesn't contain numbers
        return answer.split(" ").length === 1 && !/\d/.test(answer);
      });

      // If there are valid puzzle data, update the state
      if (puzzleData.length > 0) {
        const { question, correct_answer: answer } = puzzleData[0];
        console.log(question);
        console.log(answer);
        setQuestion(he.decode(question));
        setTrueAnswer(he.decode(answer.toLowerCase()).split("").join(" "));
      } else {
        // If no valid puzzle data is found, you might want to handle it accordingly
        console.log("No valid puzzle data found.");
      }
    } catch (error) {
      console.error("Error fetching puzzle data:", error);
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchPuzzleData();
  }, []);
  return (
    <div className="flex bg-TrivvyaBlue h-screen">
      <div className="flex flex-col text-center gap-y-7 px-10">
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
        <div className="flex justify-center">
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

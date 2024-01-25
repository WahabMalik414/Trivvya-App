//TODO: Very important: 1) fetch new data once the array has exhausted. 2)utils 3)further functionality.

import { useEffect, useState } from "react";
import he from "he";
import Keyboard from "./Keyboard";
import Category from "../../Assets/Svgs/Category";
import Home from "../../Assets/Svgs/Home";
import Puzzle from "../../Assets/Svgs/Puzzle";
import Answer from "../../Assets/Svgs/Answer";
import ConfettiExplosion from "react-confetti-explosion";
import Modal from "../../utils/GameoverModal";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  setQuestion,
  setTrueAnswer,
  setDisplayAnswer,
  setQuestions,
  setLoading,
  setMcqModel,
  increaseScore,
} from "../../store/TrivvyaSlice";
import generateApiRequest from "../../utils/generateApiRequest";
import AnswerQuestionModal from "../../utils/AnswerQuestionModal";

export default function PuzzlePage() {
  const [isExploding, setIsExploding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const questions = useAppSelector((state) => state.quiz.questions);
  const displayAnswer = useAppSelector((state) => state.quiz.displayAnswer);
  const trueAnswer = useAppSelector((state) => state.quiz.trueAnswer);
  const question = useAppSelector((state) => state.quiz.question);
  const category = useAppSelector((state) => state.quiz.category);
  const level = useAppSelector((state) => state.quiz.difficulty);
  const loading = useAppSelector((state) => state.quiz.loading);
  const tries = useAppSelector((state) => state.quiz.triesLeft);
  const showMcqModal = useAppSelector((state) => state.quiz.showMcqModal);
  const score = useAppSelector((state) => state.quiz.score);
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
      const response = await fetch(generateApiRequest("10", category, level));
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
  const handleAnswerMCQ = () => {
    dispatch(setMcqModel(true));
    console.log("MCQ");
  };
  const handlePuzzleSolved = () => {
    console.log("Successfully solved");
    dispatch(increaseScore());
    setIsExploding(true);
    // Find the index of the current question in the questions array

    setTimeout(() => {
      setIsExploding(false);

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
        console.log(
          "All questions have been answered. Fetching next questions."
        );
        fetchPuzzleData();
      }
    }, 3000);
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

  const handleSolvePuzzle = () => {
    dispatch(setDisplayAnswer(trueAnswer));
    setTimeout(() => {
      setShowModal(true);
    }, 1500);
  };
  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <>
        <div className="flex  min-h-screen">
          {showModal && <Modal />}
          {showMcqModal && <AnswerQuestionModal />}
          <div className="flex flex-col bg-TrivvyaBlue w-screen">
            <div className="flex md:gap-x-5 justify-center mb-3">
              <Category
                className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32"
                onClick={() => {
                  navigate("/category");
                }}
              />
              <Answer
                className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32"
                onClick={handleAnswerMCQ}
              />
              <Puzzle
                className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-32"
                onClick={() => {
                  handleSolvePuzzle();
                }}
              />
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
                you have {tries} wrong tries left. Answer a question from top
                tab to get more tries. Enjoy the game!
              </p>
              <div className="justify-center items-center">
                {isExploding && (
                  <ConfettiExplosion
                    force={0.8}
                    duration={3000}
                    particleCount={300}
                    width={1600}
                  />
                )}
              </div>
              <p className="text-white text-3xl md:text-5xl font-bold">CLUE</p>
              <p className="text-white font-semibold text-xl md:text-2xl">
                {question}
              </p>
              <p className="text-white font-semibold text-xl md:text-2xl">
                Score: {score}
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
      </>
    );
  }
}

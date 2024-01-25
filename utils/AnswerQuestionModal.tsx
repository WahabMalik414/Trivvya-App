import React, { useEffect, useState } from "react";
import { increaseTry, setMcqModel } from "../store/TrivvyaSlice";
import { useAppDispatch } from "../hooks/hooks";
import generateApiRequest from "../utils/generateApiRequest";
import he from "he";
type ApiResponse = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

const AnswerQuestionModal: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const dispatch = useAppDispatch();
  const [questionData, setQuestionData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const modal = document.getElementById(
      "McqModal"
    ) as HTMLDialogElement | null;
    modal?.showModal();

    // Fetch new question data when the modal is displayed
    fetchPuzzleData();
  }, []);

  const fetchPuzzleData = async () => {
    try {
      const response = await fetch(generateApiRequest("1", "9", "easy"));
      const data = await response.json();
      console.log(data.results[0]);
      setQuestionData(data.results[0]);
    } catch (error) {
      console.error("Error fetching puzzle data:", error);
    }
  };

  const shuffleAnswers = (answers: string[]) => {
    // Fisher-Yates shuffle algorithm
    const shuffledAnswers: string[] = [...answers];
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledAnswers[i], shuffledAnswers[j]] = [
        shuffledAnswers[j],
        shuffledAnswers[i],
      ];
    }
    return shuffledAnswers;
  };

  const handleAnswerSelection = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === questionData?.correct_answer;
    setSelectedAnswer(selectedAnswer);
    setIsCorrect(isCorrect);

    console.log(`Selected Answer: ${selectedAnswer}`);
    console.log(`Is Correct: ${isCorrect}`);

    // Perform any other actions based on the user's answer (true or false)
    // For example, increase tries or navigate to another page.
    if (isCorrect) {
      dispatch(increaseTry());
      setTimeout(() => {
        dispatch(setMcqModel(false));
      }, 1500);
      // Handle correct answer logic
    } else {
      setTimeout(() => {
        dispatch(setMcqModel(false));
      }, 1500);
    }

    // Close the modal
    // navigate("/");
  };

  return (
    <dialog id="McqModal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-3xl text-center">Answer a question!</h3>
        <p className="py-4 text-center">Select the correct answer:</p>
        <div className="text-center">
          <p className="text-lg font-bold">
            {he.decode(questionData?.question || "")}
          </p>
          <div className="flex flex-col mt-4">
            {shuffleAnswers([
              ...(questionData?.incorrect_answers || []),
              questionData?.correct_answer || " ",
            ]).map((answer, index) => (
              <button
                key={index}
                className={`btn-lg rounded-2xl ${
                  selectedAnswer === answer
                    ? isCorrect
                      ? "bg-green-500" // Green for correct answer
                      : "bg-red-500" // Red for incorrect answer
                    : "bg-blue-500" // Blue for other answers
                } text-white mb-2`}
                onClick={() => handleAnswerSelection(answer)}
              >
                {he.decode(answer)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default AnswerQuestionModal;

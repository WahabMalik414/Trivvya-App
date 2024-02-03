import { useEffect, useState } from "react";
import he from "he";
import Keyboard from "./Keyboard";
import Category from "../../Assets/Svgs/Category";
import Home from "../../Assets/Svgs/Home";
import Puzzle from "../../Assets/Svgs/Puzzle";
import Answer from "../../Assets/Svgs/Answer";
import ConfettiExplosion from "react-confetti-explosion";
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
  setGameOver,
} from "../../store/TrivvyaSlice";
import generateApiRequest from "../../utils/generateApiRequest";
import AnswerQuestionModal from "../../utils/AnswerQuestionModal";
import Loading from "./Loading";
import RetriesCount from "./RetryCount";
import Score from "./Score";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PuzzlePage() {
  const [isExploding, setIsExploding] = useState(false);
  const [loadingType, setLoadingType] = useState(0);
  const [isAnswerDisabled, setIsAnswerDisabled] = useState(true);

  const navigate = useNavigate();
  const questions = useAppSelector((state) => state.quiz.questions);
  const displayAnswer = useAppSelector((state) => state.quiz.displayAnswer);
  const trueAnswer = useAppSelector((state) => state.quiz.trueAnswer);
  const question = useAppSelector((state) => state.quiz.question);
  const category = useAppSelector((state) => state.quiz.category);
  const level = useAppSelector((state) => state.quiz.difficulty);
  const loading = useAppSelector((state) => state.quiz.loading);
  const showMcqModal = useAppSelector((state) => state.quiz.showMcqModal);
  const triesLeft = useAppSelector((state) => state.quiz.triesLeft);
  const gameOver = useAppSelector((state) => state.quiz.gameOver);

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

        const { question, answer } = newQuestions[0];
        dispatch(setQuestion(question));
        dispatch(setTrueAnswer(answer));
        if (loadingType === 0) {
          setLoadingType(1);
        }
      } else {
        console.log("No valid puzzle data found.");
      }
    } catch (error) {
      dispatch(setLoading(false));
      navigate("/error");
    }
  };

  const handleAnswerMCQ = () => {
    if (isAnswerDisabled) {
      toast.info("You can use this tool after 10 seconds!!!", {
        autoClose: 5000,
        pauseOnHover: false,
      });
      return;
    }
    setIsAnswerDisabled(true);

    dispatch(setMcqModel(true));
  };

  const handlePuzzleSolved = () => {
    if (gameOver) {
      dispatch(setDisplayAnswer(trueAnswer));
      return;
    } else {
      dispatch(increaseScore());
      setIsExploding(true);
      setTimeout(() => {
        setIsExploding(false);
        const currentIndex = questions.findIndex(
          (q) => q.question === question
        );
        if (currentIndex < questions.length - 1) {
          const nextQuestion = questions[currentIndex + 1];
          dispatch(setQuestion(nextQuestion.question));
          dispatch(setTrueAnswer(nextQuestion.answer));
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
    }
  };

  useEffect(() => {
    if (displayAnswer === trueAnswer && gameOver == false) {
      handlePuzzleSolved();
    }
  }, [displayAnswer, trueAnswer, questions, question]);

  useEffect(() => {
    fetchPuzzleData();
  }, []);

  useEffect(() => {
    dispatch(setDisplayAnswer("initialize"));
  }, [trueAnswer]);

  useEffect(() => {
    if (!isAnswerDisabled) {
      toast.success("You can use Answer a question tool now!!!", {
        autoClose: 5000,
        pauseOnHover: false,
      });
      return;
    }
    setTimeout(() => {
      setIsAnswerDisabled(false);
    }, 10000);
  }, [isAnswerDisabled]);

  const handleSolvePuzzle = () => {
    dispatch(setDisplayAnswer(trueAnswer));
    dispatch(setGameOver(true));
  };

  if (loading) {
    if (loadingType === 0) {
      return <Loading />;
    }
  }

  return (
    <>
      <div className="flex  min-h-screen">
        {showMcqModal && <AnswerQuestionModal />}
        <div className="flex flex-col bg-TrivvyaBlue w-screen">
          <div className="flex md:gap-x-5 justify-center mb-2">
            <Category
              className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-28 md:h-28"
              onClick={() => {
                navigate("/category");
              }}
              disabled={loading}
            />
            <div>
              <Answer
                className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-28 md:h-28"
                onClick={handleAnswerMCQ}
                disabled={loading || isAnswerDisabled}
              />
            </div>
            <Puzzle
              className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-28 md:h-28"
              onClick={() => {
                handleSolvePuzzle();
                dispatch(setGameOver(true));
              }}
              disabled={loading}
            />
            <Home
              className="transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer w-24 md:w-28 md:h-28"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="flex flex-col text-center md:px-10 gap-y-1">
            <p className="text-white text-3xl md:text-5xl font-bold">
              Solve the puzzle
            </p>
            <p className="text-white font-semibold text-xl md:text-2xl">
              Answer a question from top tab to get more tries. Enjoy the game!
            </p>
            <div className="justify-center items-center">
              {isExploding && triesLeft !== 0 && (
                <ConfettiExplosion
                  force={0.8}
                  duration={3000}
                  particleCount={300}
                  width={1600}
                />
              )}
            </div>
            <p className="text-white text-3xl md:text-3xl font-bold">CLUE</p>
            <p className="text-white font-semibold text-xl md:text-2xl bg-chipBlue m-auto px-14 rounded-full py-2">
              {loading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) : (
                question
              )}
            </p>
            <div className="flex flex-col md:flex-row md:justify-center items-center gap-y-4 md:gap-x-5 md:pr-10 md:mt-2">
              <RetriesCount />
              <Score />
            </div>
            <div className="text-white font-bold text-3xl md:text-6xl">
              <p>{displayAnswer}</p>
            </div>
            <div className="flex justify-center mt-5">
              <Keyboard />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

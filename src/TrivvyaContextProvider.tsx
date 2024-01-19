import React, { useState, ReactNode, useEffect } from "react";
import { TrivvyaContext } from "./TrivvyaContext";

interface TrivvyaProviderProps {
  children: ReactNode;
}

export function TrivvyaProvider({ children }: TrivvyaProviderProps) {
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [trueAnswer, setTrueAnswer] = useState("0");
  const [displayAnswer, setDisplayAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const generateApiRequest = () => {
    return `https://opentdb.com/api.php?amount=25&category=${category}&difficulty=${difficulty}&type=multiple`;
  };

  useEffect(() => {
    setDisplayAnswer(
      Array.from(trueAnswer)
        .map((char) => (char === " " ? " " : "_"))
        .join("")
    );
  }, [trueAnswer]);

  useEffect(() => {
    if (displayAnswer === trueAnswer) {
      // Show an alert when the puzzle is solved
      console.log("Successfully solved");
    }
  }, [displayAnswer, trueAnswer]);
  const revealCharacter = (character: string) => {
    console.log(character);
    console.log(trueAnswer);
    console.log(displayAnswer);

    if (trueAnswer.includes(character)) {
      setDisplayAnswer((prevDisplayAnswer) => {
        const newDisplayAnswer = prevDisplayAnswer.split("").map((char, i) => {
          return trueAnswer[i] === character ? character : char;
        });
        return newDisplayAnswer.join("");
      });
    }
  };

  return (
    <TrivvyaContext.Provider
      value={{
        difficulty,
        setDifficulty,
        category,
        setCategory,
        generateApiRequest,
        revealCharacter,
        trueAnswer,
        setTrueAnswer,
        displayAnswer,
        setDisplayAnswer,
        question,
        setQuestion,
      }}
    >
      {children}
    </TrivvyaContext.Provider>
  );
}

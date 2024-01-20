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
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    setDisplayAnswer(
      Array.from(trueAnswer)
        .map((char) => (char === " " ? " " : "_"))
        .join("")
    );
  }, [trueAnswer]);

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
        revealCharacter,
        trueAnswer,
        setTrueAnswer,
        displayAnswer,
        setDisplayAnswer,
        question,
        setQuestion,
        questions,
        setQuestions,
      }}
    >
      {children}
    </TrivvyaContext.Provider>
  );
}

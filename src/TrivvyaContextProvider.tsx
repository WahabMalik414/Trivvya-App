import React, { useState, ReactNode } from "react";
import { TrivvyaContext } from "./TrivvyaContext";

interface TrivvyaProviderProps {
  children: ReactNode;
}

export function TrivvyaProvider({ children }: TrivvyaProviderProps) {
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const generateApiRequest = () => {
    return `https://opentdb.com/api.php?amount=25&category=${category}&difficulty=${difficulty}&type=multiple`;
  };
  return (
    <TrivvyaContext.Provider
      value={{
        difficulty,
        setDifficulty,
        category,
        setCategory,
        generateApiRequest,
      }}
    >
      {children}
    </TrivvyaContext.Provider>
  );
}

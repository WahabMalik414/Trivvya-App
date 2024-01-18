import React, { useState, ReactNode } from "react";
import { TrivvyaContext } from "./TrivvyaContext";

interface TrivvyaProviderProps {
  children: ReactNode;
}

export function TrivvyaProvider({ children }: TrivvyaProviderProps) {
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  return (
    <TrivvyaContext.Provider
      value={{ difficulty, setDifficulty, category, setCategory }}
    >
      {children}
    </TrivvyaContext.Provider>
  );
}

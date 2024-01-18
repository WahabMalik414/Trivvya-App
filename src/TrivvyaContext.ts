import { createContext, Dispatch, SetStateAction } from "react";

export interface TrivvyaContextType {
  difficulty: string;
  setDifficulty: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

export const TrivvyaContext = createContext<TrivvyaContextType | undefined>(
  undefined
);

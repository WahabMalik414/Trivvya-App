import { createContext, Dispatch, SetStateAction } from "react";

export interface TrivvyaContextType {
  difficulty: string;
  setDifficulty: Dispatch<SetStateAction<string>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  generateApiRequest: () => string;
  revealCharacter: (character: string) => void;
  trueAnswer: string;
  displayAnswer: string;
  setTrueAnswer: Dispatch<SetStateAction<string>>;
  setDisplayAnswer: Dispatch<SetStateAction<string>>;
  question: string;
  setQuestion: Dispatch<SetStateAction<string>>;
}

export const TrivvyaContext = createContext<TrivvyaContextType | undefined>(
  undefined
);

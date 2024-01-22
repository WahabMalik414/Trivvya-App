import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface quizState {
  difficulty: string;
  category: string;
  trueAnswer: string;
  displayAnswer: string;
  questions: Array<{ question: string; answer: string }>;
  question: string;
  loading: boolean;
  score: number;
  triesLeft: number;
}

const initialState: quizState = {
  difficulty: "",
  category: "",
  trueAnswer: "initial",
  displayAnswer: "",
  questions: [],
  question: "",
  loading: false,
  score: 0,
  triesLeft: 3,
};

const trivvyaSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setDifficulty: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.difficulty = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.category = action.payload;
    },
    setTrueAnswer: (state, action) => {
      state.trueAnswer = action.payload;
    },
    setDisplayAnswer: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      console.log(state.trueAnswer);
      if (action.payload === state.trueAnswer) {
        state.displayAnswer = state.trueAnswer;
        return;
      }
      if (action.payload === "initialize") {
        console.log("is zero");
        const newDisplayAnswer = Array.from(state.trueAnswer)
          .map((char) => (char === " " ? " " : "_"))
          .join("");
        state.displayAnswer = newDisplayAnswer;
      } else {
        const newDisplayAnswer = state.displayAnswer
          .split("")
          .map((char, i) => {
            return state.trueAnswer[i] === action.payload
              ? action.payload
              : char;
          });
        state.displayAnswer = newDisplayAnswer.join("");
      }
    },
    setQuestion: (state, action: PayloadAction<string>) => {
      state.question = action.payload;
    },
    setQuestions: (
      state,
      action: PayloadAction<Array<{ question: string; answer: string }>>
    ) => {
      state.questions = action.payload;
    },
    decreaseTry: (state) => {
      state.triesLeft -= 1;
    },
    resetTries: (state) => {
      state.triesLeft = 3;
    },
  },
});

export const {
  setDifficulty,
  setCategory,
  setTrueAnswer,
  setDisplayAnswer,
  setQuestion,
  setQuestions,
  setLoading,
  decreaseTry,
  resetTries,
} = trivvyaSlice.actions;

export default trivvyaSlice.reducer;

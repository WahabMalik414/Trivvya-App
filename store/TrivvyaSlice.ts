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
  showMcqModal: boolean;
  gameOver: boolean;
  isAnswerModalDisabled:boolean;
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
  showMcqModal: false,
  gameOver: false,
  isAnswerModalDisabled:true

};

const trivvyaSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setTrueAnswer: (state, action) => {
      state.trueAnswer = action.payload;
    },
    setDisplayAnswer: (state, action: PayloadAction<string>) => {
      if (action.payload === state.trueAnswer) {
        state.displayAnswer = state.trueAnswer;
        return;
      }
      if (action.payload === "initialize") {
        const newDisplayAnswer = Array.from(state.trueAnswer)
          .map((char) => (char === " " ? " " : "_"))
          .join("");
        state.displayAnswer = newDisplayAnswer;
        return;
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
    increaseTry: (state) => {
      state.triesLeft += 1;
    },
    setMcqModel: (state, action: PayloadAction<boolean>) => {
      state.showMcqModal = action.payload;
    },
    increaseScore: (state) => {
      state.score += 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
    setGameOver: (state, action: PayloadAction<boolean>) => {
      state.gameOver = action.payload;
    },
    resetGameOver: (state) => {
      state.gameOver = false;
    },
    resetState: (state) => {
      (state.difficulty = ""),
        (state.category = ""),
        (state.trueAnswer = "initial"),
        (state.displayAnswer = ""),
        (state.questions = []),
        (state.question = ""),
        (state.loading = false),
        (state.score = 0),
        (state.triesLeft = 3),
        (state.showMcqModal = false),
        (state.gameOver = false),
        (state.isAnswerModalDisabled=true);
    },
    setIsAnswerModalDisabled:(state, action: PayloadAction<boolean>)=>{
      state.isAnswerModalDisabled = action.payload
    }
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
  increaseTry,
  setMcqModel,
  increaseScore,
  resetScore,
  setGameOver,
  resetGameOver,
  resetState,
  setIsAnswerModalDisabled
} = trivvyaSlice.actions;

export default trivvyaSlice.reducer;

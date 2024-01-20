// trivvyaSlice.js

import { createSlice } from "@reduxjs/toolkit";

const trivvyaSlice = createSlice({
  name: "quiz",
  initialState: {
    difficulty: "",
    category: "",
    trueAnswer: "0",
    displayAnswer: "",
    questions: [],
    question: "",
    loading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setDifficulty: (state, action) => {
      console.log(action.payload);
      state.difficulty = action.payload;
    },
    setCategory: (state, action) => {
      console.log(action.payload);
      state.category = action.payload;
    },
    setTrueAnswer: (state, action) => {
      state.trueAnswer = action.payload;
    },
    setDisplayAnswer: (state, action) => {
      // Add logic to set displayAnswer as needed
      // For now, assuming it's derived from trueAnswer
      //state.displayAnswer = action.payload;
      console.log(action.payload);
      console.log(state.trueAnswer);
      if (action.payload === 0) {
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
    revealCharacter: (state, action) => {
      // Add logic to reveal character in displayAnswer
    },
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const {
  setDifficulty,
  setCategory,
  setTrueAnswer,
  setDisplayAnswer,
  revealCharacter,
  setQuestion,
  setQuestions,
  setLoading,
} = trivvyaSlice.actions;

export default trivvyaSlice.reducer;

// store.js

import { configureStore } from "@reduxjs/toolkit";
import trivvyaReducer from "./TrivvyaSlice";
const store = configureStore({
  reducer: {
    quiz: trivvyaReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

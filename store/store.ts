// store.js

import { configureStore } from "@reduxjs/toolkit";
import trivvyaReducer from "./trivvyaSlice";
const store = configureStore({
  reducer: {
    quiz: trivvyaReducer,
  },
});

export default store;

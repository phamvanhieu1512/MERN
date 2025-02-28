import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice.js";

export default configureStore({
  reducer: { counter: counterSlice },
});

import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter-slice";
import userAuthSliceReducer from "./user-auth-slice";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    userAuth: userAuthSliceReducer,
  },
});

export default store;

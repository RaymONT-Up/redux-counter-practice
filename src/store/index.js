import { configureStore, createSlice } from "@reduxjs/toolkit";
const counterInitialState = {
  value: 5,
};
const initialUserAuthState = {
  isUserLoggedIn: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state, action) {
      state.value = state.value + action.payload;
    },
    decrement(state, action) {
      state.value = state.value - action.payload;
    },
  },
});
const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: initialUserAuthState,
  reducers: {
    logIn(state) {
      state.isUserLoggedIn = true;
    },
    signOut(state) {
      state.isUserLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    userAuth: userAuthSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const userAuthActions = userAuthSlice.actions;
export default store;

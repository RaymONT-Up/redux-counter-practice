import { legacy_createStore } from "redux";

const COUNTER_INCREMENT = "COUNTER_INCREMENT";
const COUNTER_DECREMENT = "COUNTER_DECREMENT";

const counterReducerDefaultState = {
  counter: 5,
};

const counterReducer = (state = counterReducerDefaultState, action) => {
  if (action.type === COUNTER_INCREMENT) {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === COUNTER_DECREMENT) {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = legacy_createStore(counterReducer);

export const counterIncrementActionCreator = () => ({
  type: COUNTER_INCREMENT,
});
export const counterDecrementActionCreator = () => ({
  type: COUNTER_DECREMENT,
});

export default store;

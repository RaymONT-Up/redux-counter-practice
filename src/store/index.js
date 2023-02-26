import { legacy_createStore } from "redux";

const COUNTER_INCREMENT = "COUNTER_INCREMENT";
const COUNTER_DECREMENT = "COUNTER_DECREMENT";

const initialState = {
  counter: 5,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === COUNTER_INCREMENT) {
    return {
      counter: state.counter + action.number,
    };
  }
  if (action.type === COUNTER_DECREMENT) {
    return {
      counter: state.counter - action.number,
    };
  }

  return state;
};

const store = legacy_createStore(counterReducer);

export const counterIncrementActionCreator = number => ({
  type: COUNTER_INCREMENT,
  number,
});
export const counterDecrementActionCreator = number => ({
  type: COUNTER_DECREMENT,
  number,
});

export default store;

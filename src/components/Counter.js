import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrementActionCreator,
  counterIncrementActionCreator,
} from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatchFunction = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatchFunction(counterIncrementActionCreator());
  };
  const decrementHandler = () => {
    dispatchFunction(counterDecrementActionCreator());
  };

  // const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button className={classes.button} onClick={decrementHandler}>
          -
        </button>
        <button className={classes.button} onClick={incrementHandler}>
          +
        </button>
      </div>
      {/* <button onClick={toggleCounterHandler}>Спрятать / Показать</button> */}
    </main>
  );
};

export default Counter;

import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatchFunction = useDispatch();
  const counter = useSelector(state => state.counter.value);

  const incrementHandler = (num = 1) => {
    dispatchFunction(counterActions.increment(num));
  };

  const decrementHandler = (num = 1) => {
    dispatchFunction(counterActions.decrement(num));
  };

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button className={classes.button} onClick={() => decrementHandler(1)}>
          - 1
        </button>
        <button className={classes.button} onClick={() => decrementHandler(10)}>
          - 10
        </button>

        <button className={classes.button} onClick={() => incrementHandler(10)}>
          + 10
        </button>
        <button className={classes.button} onClick={() => incrementHandler(1)}>
          + 1
        </button>
      </div>
    </main>
  );
};

export default Counter;

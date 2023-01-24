import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggleCounter = useSelector((state) => state.toggleState);
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const incrementByValueHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={incrementByValueHandler}>increment by 5</button>

        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

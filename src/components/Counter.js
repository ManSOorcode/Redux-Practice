import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/indexRedux";

const Counter = () => {
  const dispatch = useDispatch();
  const counters = useSelector((state) => state.counter.counter);
  const toggleCounter = useSelector((state) => state.counter.toggleState);

  // console.log(counter);

  //handling data by redux without tool kit
  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };

  // const incrementByValueHandler = () => {
  //   dispatch({ type: "increase", amount: 5 });
  // };

  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementByValueHandler = () => {
    dispatch(counterActions.increase(10)); // {type:SOME_UNIQUE_IDENTIFIER, payload:10}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counters}</div>}
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

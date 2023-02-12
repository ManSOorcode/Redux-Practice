import { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginActions } from "../store/indexRedux";
import classes from "./Auth.module.css";
// import { useSelector } from "react-redux";

const Auth = () => {
  const email = useRef();
  const password = useRef();

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginActions.login());
  };

  // if (email.trim().includes("@") && password.length !== "") {
  // }
  // const counter = useSelector((state) => state.counter.counter);
  // const toggleCounter = useSelector((state) => state.counter.toggleState);

  // const toggleCounterHandler = () => {
  //   dispatch(counterActions.toggle());
  // };

  // const incrementHandler = () => {
  //   dispatch(counterActions.increment());
  // };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={email} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={password} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;

const redux = require("redux");

const reducerFunction = (state = { counter: 0 }, action) => {
  if (action.counter === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.counter === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(reducerFunction);
// const store = redux.createStore()

export default store;

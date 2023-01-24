const redux = require("redux");

// const argumentsF = (state = { counter: 0 , amount : 0}, action)

const reducerFunction = (state = { counter: 0, toggleState: true }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      toggleState: state.toggleState,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      toggleState: state.toggleState,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      toggleState: state.toggleState,
    };
  }

  if (action.type === "toggle") {
    return {
      counter: state.counter,
      toggleState: !state.toggleState,
    };
  }

  return state;
};

const store = redux.createStore(reducerFunction);
// const store = redux.createStore()

export default store;

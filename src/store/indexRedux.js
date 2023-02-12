import { createSlice, configureStore } from "@reduxjs/toolkit";

// const redux = require("redux");

const intialCounterState = { counter: 0, toggleState: true };

// const argumentsF = (state = { counter: 0 , amount : 0}, action)
const countSlice = createSlice({
  name: "counter",
  initialState: intialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.toggleState = !state.toggleState;
    },
  },
});

console.log(countSlice.intialState);
// console.log()
// const reducerFunction = (state = { counter: 0, toggleState: true }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       toggleState: state.toggleState,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       toggleState: state.toggleState,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       toggleState: state.toggleState,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       toggleState: !state.toggleState,
//     };
//   }

//   return state;
// };

// const store = redux.createStore(reducerFunction);

// const store = redux.createStore()

//you can connect rerdux toolkit to store
// const store = redux.createStore(countReducer.reducer);

//by using toolkit redux we can create new store for redux data handling

const loginSlice = createSlice({
  name: "login",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

console.log(loginSlice);
const store = configureStore({
  reducer: { counter: countSlice.reducer, isAuthenticated: loginSlice.reducer },
});

export const counterActions = countSlice.actions;

export const loginActions = loginSlice.actions;

export default store;

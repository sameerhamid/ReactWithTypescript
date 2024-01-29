import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement" | "reset";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialStat = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialStat;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialStat);
  return (
    <div>
      <div>Count: {state.count}</div>
      <br />
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <br />
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Increment 10
      </button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Counter;

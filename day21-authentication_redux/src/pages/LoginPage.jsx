import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementbyValue,
} from "../features/counterSlice";

const LoginPage = () => {
  let dispatch = useDispatch();
  let { count } = useSelector((store) => store.counter);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <input type="text" placeholder="Enter count " />
      <button onClick={() => dispatch(incrementbyValue(456))}>
        Add to Count
      </button>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { addNum, remNum } from "../redux/actionsCreater";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";
const Counter = () => {
  const num = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className="btn-grp">
      <button onClick={() => dispatch(addNum())}>+</button>
      <h1>{num}</h1>
      <button onClick={() => dispatch(remNum())}>-</button>
    </div>
  );
};

export default Counter;

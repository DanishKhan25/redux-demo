import React from "react";
import { connect } from "react-redux";
import { addNum, remNum } from "./../redux/actionsCreater";

const Counter2 = ({ addNum, remNum, number }) => {
  return (
    <div className="btn-grp">
      <button onClick={addNum}>+</button>
      <h1>{number}</h1>
      <button onClick={remNum}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};
const mapDispacthToProps = (dispatch) => {
  return {
    addNum: () => dispatch(addNum()),
    remNum: () => dispatch(remNum()),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(Counter2);

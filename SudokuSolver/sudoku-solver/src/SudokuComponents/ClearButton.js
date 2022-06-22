import React from "react";
import "./ClearButton.css";

export const ClearButton = (props) => {
  function onClear(e) {
    e.preventDefault();
    props.clearSudokuBoard();
  }

  return (
    <button className="clear-button" onClick={onClear}>
      Clear
    </button>
  );
};

export default ClearButton;

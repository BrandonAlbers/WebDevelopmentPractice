import React from "react";
import "./Cell.css";

export const Cell = (props) => {
  function setSudokuMDArrayInCell(e) {
    const row = getCurrentRow();
    const column = getCurrentColumn();
    const inputValue = e.target.value;

    // console.log("row:" + row + " column:" + column);

    props.setSudokuMDArrayInContainer(row, column, inputValue);
  }

  function getCurrentRow() {
    const myClass = props.className;
    const myRow = myClass.charAt(3);
    return parseInt(myRow) - 1;
  }

  function getCurrentColumn() {
    const myClass = props.className;
    const myColumn = myClass.charAt(11);
    return parseInt(myColumn) - 1;
  }

  return (
    <input
      type="text"
      className="cell"
      height="100"
      width="100"
      maxLength="1"
      onChange={(e) => setSudokuMDArrayInCell(e)}
      value={
        isNaN(props.sudokuMDArray[getCurrentRow()][getCurrentColumn()])
          ? ""
          : props.sudokuMDArray[getCurrentRow()][getCurrentColumn()]
      }
    >
      {}
    </input>
  );
};

export default Cell;

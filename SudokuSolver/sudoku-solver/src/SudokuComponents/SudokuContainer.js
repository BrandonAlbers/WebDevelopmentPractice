import React from "react";
import { useState, useEffect } from "react";
import SudokuBoard from "./SudokuBoard.js";
import ButtonContainer from "./ButtonContainer.js";
import "./SudokuContainer.css";

export const SudokuContainer = () => {
  const intialState = [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ];

  function clearSudokuBoard() {
    setSudokuMDArray(intialState);
  }

  const [sudokuMDArray, setSudokuMDArray] = useState(intialState);

  function setSudokuMDArrayInContainer(row, column, inputValue) {
    setSudokuMDArray(
      sudokuMDArray.map((rowArray, rowArrayIndex) => {
        if (rowArrayIndex === row) {
          return rowArray.map((columnValue, columnIndex) => {
            if (columnIndex === column) {
              return parseInt(inputValue);
            } else {
              return columnValue;
            }
          });
        } else {
          return rowArray;
        }
      })
    );
  }

  return (
    <form className="sudoku-container">
      <h1>Sudoku Solver</h1>
      <SudokuBoard
        sudokuMDArray={sudokuMDArray}
        setSudokuMDArrayInContainer={setSudokuMDArrayInContainer}
      ></SudokuBoard>
      <ButtonContainer clearSudokuBoard={clearSudokuBoard}></ButtonContainer>
    </form>
  );
};

export default SudokuContainer;

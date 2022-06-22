import React from "react";
import "./ButtonContainer.css";
import SubmitButton from "./SubmitButton";
import ClearButton from "./ClearButton";

export const ButtonContainer = (props) => {
  return (
    <div className="button-container">
      <SubmitButton></SubmitButton>
      <ClearButton clearSudokuBoard={props.clearSudokuBoard}></ClearButton>
    </div>
  );
};

export default ButtonContainer;

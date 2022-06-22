import { useEffect } from "react";
import "./index.css";
import SudokuContainer from "./SudokuComponents/SudokuContainer";
function App() {
  useEffect(() => {
    console.log("scene was rendered");
  }, []);

  return <SudokuContainer></SudokuContainer>;
}

export default App;

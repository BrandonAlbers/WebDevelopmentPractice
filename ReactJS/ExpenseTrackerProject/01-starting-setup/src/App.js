//root component

//imported ExpenseItem component
import React from "react";

import ExpenseRenderer from "./components/Expenses/ExpenseRenderer";

import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get Started!"),
  //   React.createElement(ExpenseRenderer, { items: expenses })
  // );
  function addExpenseHandler(expense) {
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseRenderer items={expenses}></ExpenseRenderer>
    </div>
  );
};

export default App;

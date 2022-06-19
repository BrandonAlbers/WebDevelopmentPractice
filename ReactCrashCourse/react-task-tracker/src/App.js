//only for class based react components
// import React from 'react'
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  // const name ='Brad'
  // const x = true

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();

      console.log(data);

      return data;
    };

    fetchTasks();
  }, []);

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggles reminder of component that got double clicked
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //toggle show add when add button is clicked
  function toggleAddInput() {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className="container">
      <Header onAdd={toggleAddInput} showAdd={showAddTask} />
      {showAddTask ? (
        <AddTask onAdd={addTask} />
      ) : (
        console.log("Add Task is closed")
      )}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}
// if (id === task.div) {
//   tasks.map((task) => console.log(task));
// } else {
//   console.log("it failed");
// }

// setTasks(tasks.map((task) => console.log(task.id)));
// setTasks(tasks.map((task) => console.log(task)));
// setTasks(
//   tasks.map(
//     (task) => console.log("I made it")
//     // task.id === id ? (task.reminder = true) : (task.reminder = false)
//   )
// ); //dsfsdfdsfdsfsdffsfdsfdsfdsfdsfddsf

// function checkForMatchingID(task) {
//   if (this.id === task.div) {
//     console.log("We have a match");
//   } else {
//     console.log("it failed");
//   }
// }

// THIS IS HOW YOU INSTANTIATE A COMPONENT AS A CLASS
// class App extends React.Component{
//   render(){
//     return(
//       <h1>Hello From Class</h1>
//     )
//   }
// }

export default App;

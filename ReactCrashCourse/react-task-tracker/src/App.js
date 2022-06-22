//only for class based react components
// import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  // const name ='Brad'
  // const x = true

  //gets called on scene render
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
    fetchTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggles reminder of component that got double clicked
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "Put",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  //toggle show add when add button is clicked
  function toggleAddInput() {
    setShowAddTask(!showAddTask);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header onAdd={toggleAddInput} showAdd={showAddTask} />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                {showAddTask ? (
                  <AddTask onAdd={addTask} />
                ) : (
                  console.log("Add Task is closed")
                )}

                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Tasks To Show"
                )}
              </div>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
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

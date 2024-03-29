import React from "react";
import Task from "./Task";

export const Tasks = (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
        ></Task>
      ))}
    </div>
  );
};

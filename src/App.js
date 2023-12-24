
import React, { useState } from "react";
//import initialData from "./data";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  return (
    <div className="container">
      <h1>Sir Frosh Task Manager</h1>
      <h2>Input Your Task Below</h2>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;

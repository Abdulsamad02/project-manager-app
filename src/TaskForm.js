
import React, { useState } from "react";
import "./TaskForm.css"; // Import TaskForm.css

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState({
    name: "",
    dateAdded: "",
    dueDate: "",
    priority: "",
    niche: "",
    storyPoint: 0,
  });

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask({
      name: "",
      dateAdded: "",
      dueDate: "",
      priority: "",
      niche: "",
      storyPoint: 0,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleInputChange}
        className="input"
        placeholder="Name"
      />
      <input
        type="text"
        name="dateAdded"
        value={task.dateAdded}
        onChange={handleInputChange}
        className="input"
        placeholder="Date Added"
      />
      <input
        type="text"
        name="dueDate"
        value={task.dueDate}
        onChange={handleInputChange}
        className="input"
        placeholder="Due Date"
      />
      <input
        type="text"
        name="priority"
        value={task.priority}
        onChange={handleInputChange}
        className="input"
        placeholder="Priority"
      />
      <input
        type="text"
        name="niche"
        value={task.niche}
        onChange={handleInputChange}
        className="input"
        placeholder="Niche"
      />
      <input
        type="number"
        name="storyPoint"
        value={task.storyPoint}
        onChange={handleInputChange}
        className="input"
        placeholder="Story Point"
      />
      <button type="submit" className="addButton">
        Add Task If You Like
      </button>
    </form>
  );
};

export default TaskForm;

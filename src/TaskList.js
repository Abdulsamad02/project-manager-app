
import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date Added</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Niche</th>
          <th>Story Point</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index} className="listItem">
            <td>{task.name}</td>
            <td>{task.dateAdded}</td>
            <td>{task.dueDate}</td>
            <td>{task.priority}</td>
            <td>{task.niche}</td>
            <td>{task.storyPoint}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;

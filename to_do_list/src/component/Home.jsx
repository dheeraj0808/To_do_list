import React, { useState } from 'react'
import '../assets/style/Home.css'

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask(""); // reset input
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] =
        [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] =
        [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='home'>
      <p>TO DO LIST</p>
      <div>
        <input className='inputText'
          type="text"
          placeholder="Enter a task...."
          value={newTask}
          onChange={handleInputChange} />
        <button className='addButton' onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <input type="checkbox" />
            <span className="text">{task}</span>
            <button className="deleteTask" onClick={() => deleteTask(index)}>Delete</button>
            <button className="moveButton" onClick={() => moveTaskUp(index)}>↑</button>
            <button className="moveButton" onClick={() => moveTaskDown(index)}>↓</button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default Home

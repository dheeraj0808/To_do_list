import React, { useState } from 'react'
import '../assets/style/Home.css'

const Home = () => {
  const [currentTask, setCurrentTask] = useState("")   // Input box ke liye state
  const [tasks, setTasks] = useState([])              // to do list ko list me show karne ke liye

  // Add button function ke liye
  const addTask = () => {
    if (currentTask.trim() !== "") {
      setTasks([...tasks, currentTask])
      setCurrentTask("")
    }
  }

  // Delete task function ke liye
  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex)
    setTasks(updatedTasks)
  }

  return (
    <div className="home">
      <p>TO DO LIST</p>
      <div>
        <input
          className="inputtext"
          type="text"
          value={currentTask}
          onChange={(event) => {
            setCurrentTask(event.target.value)
            console.log(event.target.value) // Input box me jo type kar rahe ho wo console me dikhega
          }}
          placeholder="Enter To Do Task..."
        />
        <button
          className="addButton"
          type="button"
          onClick={addTask}
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((taskName, index) => (
          <li key={index}>
            <input type="checkbox" />
            <span className="task">{taskName}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

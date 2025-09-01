import React, { useState } from 'react'
import '../assets/style/Home.css'

const Home = () => {
  const [task, setTask] = useState("")     // input box ke liye state
  const [tasks, setTasks] = useState([])   // list of tasks

  // Add button function
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task])
      setTask("")
    }
  }
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }
  return (
    <div className="home">
      <div>
        <input
          className="inputtext"
          type="text"
          value={task}
          onChange={(e) => {
            // Yeh line value ko log karegi
            setTask(e.target.value);
            console.log(e.target.value);
          }}
          placeholder="Enter To do task.."
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

        {tasks.map((t, i) => (
          <li

            key={i}>
            <input type="checkbox" />
            <span className="task">{t}</span>

            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Home

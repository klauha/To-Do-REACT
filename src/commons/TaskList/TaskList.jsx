import { getTasks } from "../../services/apiCalls";
import "./TaskList.css"
import React, { useEffect, useState } from 'react'

export const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const fetchTasks = async () => {
          const tasks = await getTasks()
          console.log(tasks)
          setTasks(tasks.data)
        }
    
        fetchTasks()
      }, [])




  return (
    <div className="task-list">
        {tasks.map((task) => (
      <div key={task.id} className="task-item">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>{task.isCompleted ? 'Completed' : 'Not Completed'}</p>
        <button className="btn" onClick={() => onUpdate(task)}>Edit</button>
        <button className="btn" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    ))}
  </div>
  )
}
export default TaskList;
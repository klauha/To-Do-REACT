import React from 'react'
import './HomePage.css';
import TaskForm from '../../commons/TaskForm/TaskForm';
import TaskList from '../../commons/TaskList/TaskList';


export const HomePage = () => {
  return (
    <div>
       < TaskForm/>
       <TaskList/>
    </div>
  )
}

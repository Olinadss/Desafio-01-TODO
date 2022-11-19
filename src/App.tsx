import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import './global.css'

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleCreateTask = (taskTitle: string) => {
  
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    }
  
    const createNewTask = [...tasks, newTask]
  
    setTasks(createNewTask)
  }

  return (
    <>
      <Header onAddTask={handleCreateTask} />
      <Tasks tasks={tasks} />
    </>
  )
}

export default App
function uuid4() {
  throw new Error('Function not implemented.');
}


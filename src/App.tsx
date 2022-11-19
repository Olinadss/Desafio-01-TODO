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

  const handleDeleteTaskById = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks)
  }

  const handleTaskCompleted = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    })

    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={handleCreateTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={handleDeleteTaskById}
        onChangeCompleted={handleTaskCompleted}
      />      
    </>
  )
}

export default App
function uuid4() {
  throw new Error('Function not implemented.');
}


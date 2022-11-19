import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';

interface TaskListProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function Header() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState<TaskListProps[]>([])
  const [isRender, setIsRender] = useState(false);

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault()
  
    const newTask: TaskListProps = {
      id: uuid4(),
      title: task,
      isCompleted: false,
    }
  
    const createNewTask = [...taskList, newTask]
  
    setTaskList(createNewTask)
  
    setTask('')
  
    setIsRender(true)
  }

  const handleNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  } 

  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="" />

      <form onSubmit={handleCreateTask} className={styles.newTaskForm}>
        <input
          placeholder='Adicione uma nova tarefa'
          onChange={handleNewTask}
          value={task}
        />
        <button
          type="submit"
        >
          Criar
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}
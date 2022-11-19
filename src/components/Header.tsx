import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';
import { FormEvent, useState, ChangeEvent } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('')
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onAddTask(title)

    setTitle('')
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="" />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder='Adicione uma nova tarefa'
          onChange={onChangeTitle}
          value={title}
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
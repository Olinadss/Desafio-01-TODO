import { FaRegTrashAlt } from 'react-icons/fa'
import { ITask } from '../App';
import styles from './Task.module.css'

interface Props {
  task: ITask;
}

export function Task({ task }: Props) {
  return (
    <div className={styles.task}> 
      <input
        type={'radio'}
        checked={task.isCompleted}
      >
      </input> 
      <p>{task.title}</p>
      <button className={styles.deleteButton}>
        <FaRegTrashAlt size={16}/>
      </button>
    </div>
  );
}

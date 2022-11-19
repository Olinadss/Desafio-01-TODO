import { FaRegTrashAlt } from 'react-icons/fa'
import { ITask } from '../App';
import styles from './Task.module.css'

interface Props {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onChangeCompleted: (taskId: string) => void;
}

export function Task({ task, onDeleteTask, onChangeCompleted }: Props) {
  return (
    <div className={styles.task}> 
      <input
        type={'checkbox'}
        checked={task.isCompleted}
        onChange={() => onChangeCompleted(task.id)}
      >
      </input> 
      <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteTask(task.id)}
      >
        <FaRegTrashAlt size={16}/>
      </button>
    </div>
  );
}

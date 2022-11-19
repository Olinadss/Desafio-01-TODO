import { FaRegTrashAlt } from 'react-icons/fa'
import { BsFillCheckCircleFill } from 'react-icons/bs'
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
      <button className={styles.checkContainer} onClick={() => onChangeCompleted(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
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

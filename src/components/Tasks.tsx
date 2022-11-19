import { ITask } from '../App';
import { Task } from './Task';
import { TaskEmpty } from './TaskEmpty';
import styles from './Tasks.module.css'

interface Props {
  tasks: ITask[];
  onDeleteTask: (taskId: string) => void;
  onChangeCompleted: (taskId: string) => void;
}

export function Tasks({ tasks, onDeleteTask, onChangeCompleted }: Props) {
  const isValid = tasks.length > 0;
  const tasksCount = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span>{tasksCount}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>{completedTask} de {tasksCount}</span>
        </div>
      </header>
      <div className={styles.list}>
        {isValid ? tasks.map((task) => (
          <Task
            key={task.id}
            task={task} onDeleteTask={onDeleteTask}
            onChangeCompleted={onChangeCompleted}
          />
        )) : <TaskEmpty />}
      </div>
    </section>
  );
}

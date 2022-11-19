import { ITask } from '../App';
import { Task } from './Task';
import styles from './Tasks.module.css'

interface Props {
  tasks: ITask[];
}

export function Tasks({ tasks }: Props) {
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
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

import Clipboard from '../assets/Clipboard.svg';

import styles from './TaskEmpty.module.css';

export function TaskEmpty() {
  return (
    <div className={styles.containerTask}>
      <img src={Clipboard} alt='' />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
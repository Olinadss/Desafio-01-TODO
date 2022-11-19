import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas Criadas</p>
          <span>0</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>0</span>
        </div>
      </header>
    </section>
  );
}

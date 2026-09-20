import styles from './mainContainer.module.css';
import { TaskList } from '../taskList/TaskList';

export function MainContainer() {
  return (
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Входящие</h1>
      </header>
      <TaskList />
    </div>
  );
}
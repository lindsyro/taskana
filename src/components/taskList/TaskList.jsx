import styles from './taskList.module.css';
import { EmptyState } from '../emptyState/EmptyState';

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <EmptyState 
        image="/images/empty-task.png"
        subtitle="Все твои задачи организованы как надо"
        description="Отличная работа! Ты большой молодец!"
        imagePosition="bottom"
        variant="large"
      />
    </div>
  );
}
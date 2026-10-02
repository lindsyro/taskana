import styles from "./taskList.module.css";
import { EmptyState } from "@/components";

export function TaskList({ tasks = [] }) {
  if (tasks.length === 0) {
    return (
      <ul className={styles.taskList}>
        <li className={styles.emptyItem}>
          <EmptyState
            image="/images/empty-task.svg"
            subtitle="Все твои задачи организованы как надо"
            description="Отличная работа! Ты большой молодец!"
            imagePosition="bottom"
            variant="large"
          />
        </li>
      </ul>
    );
  }

  return (
    <ul className={styles.taskList}>
      {tasks.map((task, index) => (
        <li key={task.id || index} className={styles.taskItem}>
          {/* Здесь будет рендер компонента задачи */}
          {task.title || "Новая задача"}
        </li>
      ))}
    </ul>
  );
}

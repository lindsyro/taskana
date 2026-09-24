import styles from "./taskList.module.css";
import { EmptyState } from "@/components";

export function TaskList() {
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

import styles from "./statistic.module.css";
import { EmptyState } from "@/components";

export function Statistic({ stats = null }) {
  if (!stats || (Array.isArray(stats) && stats.length === 0)) {
    return (
      <EmptyState
        image="/images/notebook.svg"
        subtitle={null}
        description={
          "Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и\u00A0самочувствие."
        }
        imagePosition="top"
        variant="small"
      />
    );
  }

  return (
    <div className={styles.statisticContent}>
      {/* Здесь будет рендер статистики с реальными данными */}
    </div>
  );
}

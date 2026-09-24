import styles from "./statistic.module.css";
import { EmptyState } from "@/components";

export function Statistic() {
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

import styles from './sideBar.module.css';
import { EmptyState } from '../emptyState/EmptyState';

export function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <EmptyState 
        image="/images/notebook.png"
        subtitle={null}
        description="Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие."
        imagePosition="top"
        variant="small"
      />
    </aside>
  );
}
import styles from "./sideBar.module.css";
import { Statistic } from "../statistic/Statistic";

export function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <Statistic />
    </aside>
  );
}

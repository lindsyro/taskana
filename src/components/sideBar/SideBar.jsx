import styles from "./sideBar.module.css";
import { Statistic } from "@/components";

export function SideBar() {
  return (
    <aside className={styles.sideBar}>
      <Statistic />
    </aside>
  );
}

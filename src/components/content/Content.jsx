import styles from "./content.module.css";
import { NavBar, SideBar } from "@/components";

export function Content({ children }) {
  return (
    <div className={styles.content}>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <SideBar />
    </div>
  );
}

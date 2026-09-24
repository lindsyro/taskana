import styles from "./content.module.css";
import { NavBar } from "../navBar/NavBar";
import { SideBar } from "../sideBar/SideBar";

export function Content({ children }) {
  return (
    <div className={styles.content}>
      <NavBar />
      <main className={styles.main}>{children}</main>
      <SideBar />
    </div>
  );
}

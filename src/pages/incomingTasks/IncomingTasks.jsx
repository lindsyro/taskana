import styles from "./incomingTasks.module.css";
import { MainContainer, Footer } from "@/components";

export function IncomingTasks() {
  return (
    <div className={styles.incomingTasks}>
      <MainContainer />
      <Footer />
    </div>
  );
}

import styles from "./appLayout.module.css";
import { Header, Content } from "@/components";

export function AppLayout({ children }) {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Content>{children}</Content>
    </div>
  );
}

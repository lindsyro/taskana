import styles from "./header.module.css";
import { Logo, Button } from "@/components";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Button icon="/icons/plus-2.svg">Создать</Button>
    </header>
  );
}

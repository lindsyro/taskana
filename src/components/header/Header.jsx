import styles from "./header.module.css";
import { Logo } from "../logo/Logo";
import { Button } from "../button/Button";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Button icon="/icons/plus-2.svg">Создать</Button>
    </header>
  );
}

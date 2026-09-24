import styles from "./logo.module.css";

export function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <img src="/logo.svg" alt="Логотип" width="124" height="40" />
    </a>
  );
}

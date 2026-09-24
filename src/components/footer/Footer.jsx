import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Проект выполнен в рамках стажировки{" "}
        <a
          href="https://preax.ru"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          PREAX
        </a>
      </p>
    </footer>
  );
}

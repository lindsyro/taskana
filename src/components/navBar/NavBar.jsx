import styles from "./navBar.module.css";

export function NavBar() {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <a href="#" className={`${styles.navLink} ${styles.active}`}>
            <span className={styles.iconPlaceholder}></span>
            Входящие
          </a>
        </li>
      </ul>
    </nav>
  );
}

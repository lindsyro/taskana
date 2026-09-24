import styles from "./button.module.css";

export function Button({ children, icon, href, ...props }) {
  const content = (
    <>
      {icon && <img src={icon} alt="" className={styles.icon} />}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={styles.button} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={styles.button} {...props}>
      {content}
    </button>
  );
}

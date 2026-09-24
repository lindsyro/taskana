import styles from "./button.module.css";

export function Button({ children, icon, href, ...props }) {
  const content = (
    <>
      {icon && (
        <img
          src={icon}
          alt="Иконка"
          width="24"
          height="24"
          className={styles.icon}
        />
      )}
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

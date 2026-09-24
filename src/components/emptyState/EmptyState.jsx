import styles from "./emptyState.module.css";

export function EmptyState({
  image,
  subtitle,
  description,
  imagePosition,
  variant,
}) {
  const containerClass = `${styles.emptyState} ${styles[variant] || ""}`;

  const imgWidth = variant === "large" ? 463 : 231;
  const imgHeight = variant === "large" ? 319 : 168;
  const altText = subtitle || "Иллюстрация пустого состояния";

  return (
    <div className={containerClass}>
      {imagePosition === "top" && (
        <img
          src={image}
          alt={altText}
          width={imgWidth}
          height={imgHeight}
          className={styles.image}
        />
      )}

      <div className={styles.textContainer}>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {description && <p className={styles.description}>{description}</p>}
      </div>

      {imagePosition === "bottom" && (
        <img
          src={image}
          alt={altText}
          width={imgWidth}
          height={imgHeight}
          className={styles.image}
        />
      )}
    </div>
  );
}

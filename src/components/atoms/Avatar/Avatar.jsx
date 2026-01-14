import styles from "./Avatar.module.scss";

export default function Avatar({
  src,
  alt = "User avatar",
  size = "sm",
  name,
  className = "",
}) {
  const fallback = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <div
      className={`${styles.avatar} ${styles[size]} ${className}`}
    >
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
}

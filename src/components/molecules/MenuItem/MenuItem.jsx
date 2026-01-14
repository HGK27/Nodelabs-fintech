import styles from "./MenuItem.module.scss";

export default function MenuItem({
  icon,
  label,
  active = false,
  onClick,
}) {
  return (
    <div
      className={`${styles.menuItem} menuItem ${active ? styles.active : ""}`}
      onClick={onClick}
      data-label={label}
    >
      <span className={styles.icon}>{icon}</span>
       <span className= "menuItemLabel">{label}</span>
    </div>
  );
}

import styles from "./IconButton.module.scss";

export default function IconButton({ icon, onClick }) {
  return (
    <button
      className={styles.iconButton}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

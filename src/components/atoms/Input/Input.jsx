import styles from "./Input.module.scss";

export default function Input({hasError, ...props }) {
  return (
    <input
      className={`${styles.input} ${hasError ? styles.error : ""}`}
      {...props}
    />
  );
}

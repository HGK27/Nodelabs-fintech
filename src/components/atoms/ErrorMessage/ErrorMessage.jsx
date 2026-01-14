import styles from "./ErrorMessage.module.scss";

export default function ErrorMessage({ children , ...props }) {
  return (
    <div className={styles.errorMessage} {...props}>
      {children}
    </div>
  )
}

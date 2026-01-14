import styles from "./Button.module.scss";

export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
}

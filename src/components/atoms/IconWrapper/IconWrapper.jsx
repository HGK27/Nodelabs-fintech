import styles from "./IconWrapper.module.scss";

export default function IconWrapper({ children, variant = "default" }) {
  return (
    <div className={`${styles.icon} ${styles[variant]}`}>
      {children}
    </div>
  );
}

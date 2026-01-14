import styles from './Label.module.scss';

export default function Label({ children, ...props }) {
  return (
    <div className={styles.label} {...props}>{children}</div>
  )
}

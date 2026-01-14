import styles from './PageTitle.module.scss';

export default function PageTitle({ children, ...props }) {
  return (
    <h1 className={styles.PageTitle} {...props}>{children}</h1>
  )
}

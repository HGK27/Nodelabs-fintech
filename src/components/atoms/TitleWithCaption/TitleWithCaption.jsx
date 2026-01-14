import styles from './TitleWithCaption.module.scss';

export default function TitleWithCaption({ title, subtitle, ...props }) {
  return (
    <div className={styles.text} {...props}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

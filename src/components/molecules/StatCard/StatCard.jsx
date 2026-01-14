import styles from "./StatCard.module.scss";
import CurrencyText from "../../atoms/CurrencyText/CurrencyText";
import IconWrapper from "../../atoms/IconWrapper/IconWrapper";

export default function StatCard({
  title,
  value,
  currency = "TRY",
  icon,
  highlighted = false,
}) {
  return (
    <div className={`${styles.card} ${highlighted ? styles.active : ""}`}>
      <IconWrapper variant={highlighted ? "success" : "default"}>
        {icon}
      </IconWrapper>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>

        <CurrencyText value={value} currency={currency} variant="statCard" />
      </div>
    </div>
  );
}

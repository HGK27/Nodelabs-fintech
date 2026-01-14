import styles from "./ChartTooltip.module.scss";
export default function WorkingCapitalTooltip({ active, payload, currency }) {
  if (!active || !payload?.length) return null;

  return (
    <div className={styles.customTooltip}>
      {currency} {payload[0].value.toLocaleString()}
    </div>
  );
}

import styles from "./PeriodSelect.module.scss";
import ChevronRightIcon from "../../../icons/ChevronRightIcon";

export default function PeriodSelect({ value, options, onChange }) {
  return (
    <div className={styles.wrapper}>
      <select
        id="ChartSelect"
        name="period"
        className={styles.select}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} name={opt.label} id={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <span className={styles.icon}>
        <ChevronRightIcon />
      </span>
    </div>
  );
}
import styles from "./WorkingCapitalHeader.module.scss";
import SectionTitle from "../../../atoms/SectionTitle/SectionTitle";
import PeriodSelect from "../../../atoms/Chart/PeriodSelect/PeriodSelect";

export default function WorkingCapitalHeader({ period, onPeriodChange }) {
  return (
    <div className={styles.header}>
      <SectionTitle title="Working Capital"/>
            {/* Legend Alanı (Görseldeki gibi üst orta kısım) */}
            <div className={styles.legendWrapper}>
              <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.incomeDot}`}></span>
                <span>Income</span>
              </div>
              <div className={styles.legendItem}>
                <span className={`${styles.dot} ${styles.expenseDot}`}></span>
                <span>Expenses</span>
              </div>
            </div>
      <PeriodSelect
        value={period}
        onChange={onPeriodChange} // Organizmaya ilet
        options={[
          { value: "last7days", label: "Last 7 days" },
          { value: "last6months", label: "Last 6 months" },
        ]}
      />
    </div>
  );
}

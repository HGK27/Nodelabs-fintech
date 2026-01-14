import styles from "./Home.module.scss";

import FinancialSummary from "../../../components/organisms/FinancialSummary/FinancialSummary";
import WorkingCapital from "../../../components/organisms/WorkingCapital/WorkingCapital";
import RecentTransactions from "../../../components/organisms/RecentTransaction/RecentTransaction";
import Wallet from "../../../components/organisms/Wallet/Wallet";
import ScheduledTransfers from "../../../components/organisms/ScheduledTransfers/ScheduledTransfers";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.section}>
          <FinancialSummary />
        </div>
        <div className={styles.section}>
          <WorkingCapital />
        </div>
        <div className={styles.section}>
          <RecentTransactions />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.section}>
          <Wallet />
        </div>
        <div className={styles.section}>
          <ScheduledTransfers/>
        </div>
      </div>
    </div>
  );
}

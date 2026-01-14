import styles from "./RecentTransaction.module.scss";
import SectionHeader from "../../molecules/SectionHeader/SectionHeader";
import TransactionItem from "../../molecules/TransactionItem/TransactionItem";
import { useRecentTransactions } from "../../../hooks/useFinancial";

// Skeleton
import SkeletonRowTransaction from "../../Skeleton/SkeletonRowTransaction/SkeletonRowTransaction";

export default function RecentTransactions() {
  const { data, isLoading, isError } = useRecentTransactions(3);
  const transactions = data?.data?.transactions || [];

  return (
    <div className={styles.container}>
      <SectionHeader title="Recent Transactions" />

      <div className={styles.headerRow}>
        <span>NAME / BUSINESS</span>
        <span>TYPE</span>
        <span>AMOUNT</span>
        <span>DATE</span>
      </div>

      <div className={styles.list}>
        {isLoading &&
          Array.from({ length: 3 }).map((_, i) => (
            <SkeletonRowTransaction key={i} />
          ))}

        {!isLoading && isError && (
          <div className={styles.error}>Veriler alınamadı.</div>
        )}

        {!isLoading &&
          !isError &&
          transactions.map((trx) => (
            <TransactionItem key={trx.id} transaction={trx} />
          ))}
      </div>
    </div>
  );
}
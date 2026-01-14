import styles from "./FinancialSummary.module.scss";
import StatCard from "../../molecules/StatCard/StatCard";
import SummaryCardWalletIcon from "../../icons/SummaryCardWalletIcon";
import SummaryCardWalletAdd from "../../icons/SummaryCardWalletAdd";

import { useSummaryRequest } from "../../../hooks/useFinancial";

import SkeletonStatCards from "../../Skeleton/SkeletenStatCards/SkeletenStatCards"

export default function FinancialSummary() {
  const { data, isLoading, isError } = useSummaryRequest();

  if (isLoading) {
    return <SkeletonStatCards/>;
  }

  if (isError) {
    return <div className={styles.error}>Veriler alınamadı.</div>;
  }

  const summary = data?.data || {};

  return (
    <div className={styles.wrapper}>
      <StatCard
        title="Total Balance"
        value={summary?.totalBalance?.amount || 0}
        currency={summary?.totalBalance?.currency}
        icon={<SummaryCardWalletIcon />}
        highlighted
      />

      <StatCard
        title="Total Spending"
        value={summary?.totalExpense?.amount || 0}
        currency={summary?.totalExpense?.currency}
        icon={<SummaryCardWalletIcon />}
      />

      <StatCard
        title="Total Saved"
        value={summary?.totalSavings?.amount || 0}
        currency={summary?.totalSavings?.currency}
        icon={<SummaryCardWalletAdd />}
      />
    </div>
  );
}

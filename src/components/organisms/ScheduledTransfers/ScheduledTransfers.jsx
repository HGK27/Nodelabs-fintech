import styles from "./ScheduledTransfers.module.scss";
import SectionHeader from "../../molecules/SectionHeader/SectionHeader";
import ScheduledItem from "../../molecules/ScheduledItem/ScheduledItem";
import { useScheduledTransfers } from "../../../hooks/useFinancial";

import SkeletonRowScheduled from "../../Skeleton/SkeletonRowScheduled/SkeletonRowScheduled";

export default function ScheduledTransfers() {
  const { data, isLoading, isError } = useScheduledTransfers();
  const transfers = data?.data?.transfers || [];

  return (
    <div className={styles.container}>
      <SectionHeader title="Scheduled Transfers" />

      <div className={styles.list}>
        {isLoading &&
          Array.from({ length: 5 }).map((_, i) => (
            <SkeletonRowScheduled key={i} />
          ))}

        {!isLoading && isError && (
          <p className={styles.error}>Error loading transfers</p>
        )}

        {!isLoading &&
          !isError &&
          transfers.map((transfer) => (
            <ScheduledItem key={transfer.id} transfer={transfer} />
          ))}
      </div>
    </div>
  );
}

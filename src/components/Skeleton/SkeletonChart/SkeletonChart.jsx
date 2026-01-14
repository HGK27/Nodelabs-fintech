import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonChart.module.scss";

export default function SkeletonChart() {
    return (
    <div className={styles.chartWrapper}>
      <Skeleton className={styles.skeletonChart} />
    </div>
  );
}

import Skeleton from "react-loading-skeleton";
import styles from "./SkeletenStatCards.module.scss";

export default function SkeletonStatCards() {
  return (
    <div className={styles.skeletonWrapper}>
      {[1, 2, 3].map((_, i) => (
        <div key={i} className={styles.skeletonCardContainer}>
          <Skeleton className={styles.skeletonCard} />
        </div>
      ))}
    </div>
  );
}

import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonWallet.module.scss";

export default function SkeletonWallet() {
  return (
    <>
      {[1, 2].map((_, i) => (
        <div key={i} className={styles.WalletCardSkeleton}>
          <Skeleton className={styles.skeletonItem} />
        </div>
      ))}
    </>
  );
}

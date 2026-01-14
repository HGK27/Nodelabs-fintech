import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonInfo.module.scss";

export default function SkeletonInfo({ lines = 2 }) {
  return (
    <div className={styles.info}>
      <Skeleton width="60%" height={14} />
      {lines > 1 && <Skeleton width="40%" height={12} />}
    </div>
  );
}

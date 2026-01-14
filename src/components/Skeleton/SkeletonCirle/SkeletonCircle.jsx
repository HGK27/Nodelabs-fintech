import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonCircle.module.scss";

export default function SkeletonCircle({ size = 40 }) {
  return (
    <div className={styles.circle}>
      <Skeleton circle width={size} height={size} />
    </div>
  );
}

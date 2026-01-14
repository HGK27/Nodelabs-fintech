import Skeleton from "react-loading-skeleton";
import styles from "./SkeletonText.module.scss";

export default function SkeletonText({ width = 50 }) {
  return (
    <div className={styles.text}>
      <Skeleton width={width} height={15} />
    </div>
  );
}
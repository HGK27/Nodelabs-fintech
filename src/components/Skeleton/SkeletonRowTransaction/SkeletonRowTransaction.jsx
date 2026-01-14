import SkeletonCircle from "../SkeletonCirle/SkeletonCircle"
import SkeletonText from "../SkeletonText/SkeletonText"
import SkeletonInfo from "../SkeletonInfo/SkeletonInfo"
import styles from "./SkeletonRowTransaction.module.scss";

export default function SkeletonRowTransaction() {
  return (
    <div className={styles.skeletonRow}>
      <SkeletonCircle size={36} />
        <SkeletonInfo/>
      <SkeletonText width="70%" />
      <SkeletonText width="50%" />
      <SkeletonText width="60%" />
    </div>
  );
}

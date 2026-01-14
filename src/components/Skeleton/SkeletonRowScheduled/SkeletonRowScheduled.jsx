import SkeletonCircle from "../SkeletonCirle/SkeletonCircle"
import SkeletonText from "../SkeletonText/SkeletonText";
import SkeletonInfo from "../SkeletonInfo/SkeletonInfo"
import styles from "./SkeletonRowScheduled.module.scss";

export default function SkeletonRowScheduled() {
  return (
    <div className={styles.skeletonRow}>
      <SkeletonCircle size={40} />

      <div className={styles.textBlock}>
        <SkeletonInfo/>
      </div>

      <SkeletonText width={50} />
    </div>
  );
}

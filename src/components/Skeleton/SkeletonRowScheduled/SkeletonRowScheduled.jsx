import SkeletonCircle from "../SkeletonCirle/SkeletonCircle.jsx"
import SkeletonText from "../SkeletonText/SkeletonText.jsx";
import SkeletonInfo from "../SkeletonInfo/SkeletonInfo.jsx"
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

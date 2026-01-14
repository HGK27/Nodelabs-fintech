import styles from "./WalletHeader.module.scss";
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

export default function WalletHeader() {
  return (
    <div className={styles.header}>
      <SectionTitle title="Wallet" />

      <button className={styles.moreButton} aria-label="More options">
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}

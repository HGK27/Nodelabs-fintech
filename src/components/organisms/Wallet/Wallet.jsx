import styles from "./Wallet.module.scss";
import WalletHeader from "../../molecules/WalletHeader/WalletHeader";
import WalletCard from "../../molecules/WalletCard/WalletCard";
import { useWallet } from "../../../hooks/useFinancial";

import SkeletonWallet from "../../Skeleton/SkeletonWallet/SkeletonWallet";

export default function Wallet() {
  const { data, isLoading, isError } = useWallet();
  const walletData = data?.data?.cards || [];

  return (
    <div className={styles.WalletContainer}>
      <WalletHeader />

      <div className={styles.WalletCardList}>
        {isLoading && <SkeletonWallet />}

        {!isLoading && isError && (
          <div className={styles.error}>Data unavailable.</div>
        )}

        {!isLoading &&
          !isError &&
          walletData.map((card) => (
            <WalletCard card={card} key={card.id} />
          ))}
      </div>
    </div>
  );
}

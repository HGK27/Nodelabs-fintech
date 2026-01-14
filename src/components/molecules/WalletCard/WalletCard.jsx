import styles from "./WalletCard.module.scss";
import CardContactLessIcon from "../../icons/CardContactLessIcon";
import visa from "../../../assets/images/visa.png";
import master from "../../../assets/images/master.png";

export default function WalletCard({ card }) {
  const {
    cardNumber,
    bank,
    network,
    expiryMonth,
    expiryYear,
    color,
    isDefault,
  } = card;
  const [bankName, bankType] = bank.split("|").map((s) => s.trim());

  return (
    <div
      className={`${styles.card} ${isDefault ? styles.default : ""}`}
      style={{ background: color }}
    >
      {/* TOP */}
      <div className={styles.header}>
        <span className={styles.bank}>
          <span className={styles.name}>{bankName}</span>
          <span className={styles.separator}> | </span>
          <span className={styles.type}>{bankType}</span>
        </span>
      </div>

      {/* CHIP */}
      <div className={styles.chipRow}>
        <div className={styles.chip} />
        <div className={styles.contactless}>
          <CardContactLessIcon />
        </div>
      </div>

      {/* CARD NUMBER */}
      <div className={styles.number}>{cardNumber}</div>

      {/* FOOTER */}
      <div className={styles.footer}>
        <div>
          <span className={styles.value}>
            {expiryMonth}/{expiryYear.toString().slice(-2)}
          </span>
        </div>

        <div>
          <div className={styles.network}>
            {network === "Visa" ? (
              <img src={visa} alt="Visa" />
            ) : network === "Master" ? (
              <img src={master} alt="MasterCard" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from "./TransactionItem.module.scss";
import Avatar from "../../atoms/Avatar/Avatar";
import TitleWithCaption from "../../atoms/TitleWithCaption/TitleWithCaption";
import CurrencyText from "../../atoms/CurrencyText/CurrencyText";
import dayjs from "dayjs";

export default function TransactionItem({ transaction }) {
  return (
    <div className={styles.item}>
      <div className={styles.column}>
        <Avatar src={transaction.image} alt={transaction.name} size="md" />
        <TitleWithCaption
        size="sm"        
          title={transaction.name}
          subtitle={transaction.business}
        />
      </div>

      <div className={styles.column}>{transaction.type}</div>

      <div className={styles.column}>
        <CurrencyText
          value={transaction.amount}
          currency={transaction.currency}
          variant="transactionItem"
        />
      </div>

      <div className={styles.column}>
        <span className={styles.date}>
          {dayjs(transaction.date).format("DD MMM YYYY")}
        </span>
      </div>
    </div>
  );
}

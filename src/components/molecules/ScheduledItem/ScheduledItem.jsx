import styles from "./ScheduledItem.module.scss";
import Avatar from "../../atoms/Avatar/Avatar";
import TitleWithCaption from "../../atoms/TitleWithCaption/TitleWithCaption";
import CurrencyText from "../../atoms/CurrencyText/CurrencyText";
import dayjs from "dayjs";

export default function ScheduledItem({ transfer }) {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <Avatar src={transfer.image} alt={transfer.name} />

        <TitleWithCaption
          title={transfer.name}
          subtitle={dayjs(transfer.date).format("MMMM DD, YYYY [at] HH:mm")}
        />
      </div>

      <CurrencyText
        value={transfer.amount}
        currency={transfer.currency}
        variant="scheduledItem"
        negative
      />
    </div>
  );
}

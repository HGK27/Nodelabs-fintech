import styles from "./CurrencyText.module.scss";

const SYMBOL_TO_ISO = {
  $: "USD",
  "₺": "TRY",
  "€": "EUR",
  "£": "GBP",
};

export default function CurrencyText({
  value = 0,
  currency = "TRY",
  locale = "tr-TR",
  variant = "",
  ...props
}) {
  const isoCurrency = SYMBOL_TO_ISO[currency] || currency;

  let formatted = value;

  try {
    formatted = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: isoCurrency,
      minimumFractionDigits: 2,
    }).format(Number(value));
  } catch {
    formatted = `${currency}${Number(value).toFixed(2)}`;
  }

  return (
    <span className={`${styles.amount} ${styles[variant]}`} {...props}>
      {formatted}
    </span>
  );
}

import styles from "./ToggleButton.module.scss";

export default function ToggleButton({
  collapsed,
  onToggle,
  breakpoint = 1200,
}) {
  return (
    <button
      type="button"
      className={styles.toggleBtn}
      onClick={onToggle}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      aria-pressed={collapsed}
      data-breakpoint={breakpoint}
    >
      <span />
      <span />
      <span />
    </button>
  );
}

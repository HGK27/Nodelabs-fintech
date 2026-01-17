import styles from "./MobileDropDownMenu.module.scss";
import MobileDropDownItem from "../../atoms/MobileDropDownItem/MobileDropDownItem";

export default function MobileDropDownMenu({
  topItems = [],
  dropdownItems = [],
  bottomItems = [],
  onNavigate,
  onLogout,
}) {
  return (
    <div className={styles.menu}>

      {/* TOP MENU */}
      <div className={styles.section}>
        {topItems.map((item) => (
          <MobileDropDownItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            onClick={() => onNavigate(item.path, item.key)}
          />
        ))}
      </div>

      {/* DROPDOWN MENU (notification, search vs) */}
      <div className={styles.section}>
        {dropdownItems.map((item) => (
          <MobileDropDownItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            onClick={() => onNavigate(item.path, item.key)}
          />
        ))}
      </div>

      {/* BOTTOM MENU */}
      <div className={styles.section}>
        {bottomItems.map((item) =>
          item.key === "logout" ? (
            <MobileDropDownItem
              key={item.key}
              icon={item.icon}
              label={item.label}
              danger
              onClick={onLogout}
            />
          ) : (
            <MobileDropDownItem
              key={item.key}
              icon={item.icon}
              label={item.label}
              onClick={() => onNavigate(item.path, item.key)}
            />
          )
        )}
      </div>
    </div>
  );
}

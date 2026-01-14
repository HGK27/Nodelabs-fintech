import styles from "./AuthLayout.module.scss";
import Logo from "../../../assets/images/Logo.webp";
import LoginBg from "../../../assets/images/LoginBgImage.webp";

export default function AuthLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
        </div>

        <div className={styles.formWrapper}>
          {children}
        </div>
      </div>

      <div
        className={styles.right}
        style={{ backgroundImage: `url(${LoginBg})` }}
      />
    </div>
  );
}

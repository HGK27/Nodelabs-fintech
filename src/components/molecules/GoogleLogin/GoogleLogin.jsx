import styles from "./GoogleLogin.module.scss";
import Button from "../../atoms/Button/Button";
import GoogleIcon from "../../icons/GoogleIcon.jsx";

export default function GoogleLogin() {
  return (
    <Button variant="secondary">
      <div className={styles.googleLogin}>
        <GoogleIcon size={24} />
        <span className={styles.loginText}>Sign in with Google</span>
      </div>
    </Button>
  );
}

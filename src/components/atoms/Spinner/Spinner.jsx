import SpinnerIcon from "../../icons/SpinnerIcon.jsx"
import styles from "./Spinner.module.scss"

export default function Spinner() {
  return (
    <div className={styles.spinner}><SpinnerIcon /></div>
  )
}

import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";
import ErrorMessage from "../../atoms/ErrorMessage/ErrorMessage";
import styles from "./FormField.module.scss";

export default function FormField({ label,error, ...props }) {
  return (
    <div className={styles.field}>
      <Label>{label}</Label>
      <Input {...props} hasError={!!error}/>
      {error && <ErrorMessage {...props}>{error.message}</ErrorMessage>}
    </div>
  );
}

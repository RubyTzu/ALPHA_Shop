//import
import styles from "../../../Register.module.scss"

//export
export default function FormInput({ inputLabel, children }) {
  return (
    <>
      <div className={styles.inputLabel}>{inputLabel}</div>
      {children}
    </>
  );
}

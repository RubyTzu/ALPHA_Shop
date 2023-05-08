//import
import styles from "../../Register/Register.module.scss";

//export
export default function Phase({ phase, children }) {
  return (
    <section className={`${styles.buttonGroup} col col-12`} data-phase={phase}>
      {children}
    </section>
  );
}

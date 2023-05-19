//import
import styles from "../../Register.module.scss"
import RadioGroup from "./Step2Components/RadioGroup"

//export
export default function Step2() {
    return (
      <form className="col col-12" data-phase="shipping">
        <h3 className={styles.formTitle}>運送方式</h3>
        <section className={`${styles.formBody} col col-12`}>
          <RadioGroup />
        </section>
      </form>
    );
}
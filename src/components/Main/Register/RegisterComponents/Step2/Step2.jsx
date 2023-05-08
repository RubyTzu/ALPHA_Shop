//import
import styles from "../../Register.module.scss"
import RadioGroup from "./Step2Components/RadioGroup"

//export
export default function Step2() {
    return (
      <form class="col col-12" data-phase="shipping">
        <h3 class={styles.formTitle}>運送方式</h3>
        <section class={`${styles.formBody} col col-12`}>
          <RadioGroup />
        </section>
      </form>
    );
}
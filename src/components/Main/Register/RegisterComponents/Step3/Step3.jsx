//import
import styles from "../../Register.module.scss";
import NameCardNumInputs from "./Step3Components/NameCardNumInputs"
import DatePassInputs from "./Step3Components/DatePassInputs"

//export
export default function Step3() {
  return (
    <form class="col col-12" data-phase="credit-card">
      <h3 class={styles.formTitle}>付款資訊</h3>
      <section class={`${styles.formBody} col col-12`}>
        <NameCardNumInputs />
        <DatePassInputs />
      </section>
    </form>
  );
}

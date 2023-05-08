//import
import GenderNameInput from "./Step1Components/GenderNameInput"
import TelEmailInput from "./Step1Components/TelEmailInput"
import AddressInput from "./Step1Components/AddressInput"
import styles from "../../Register.module.scss"

//export
export default function Step1() {
  return (
    <form className="col col-12" data-phase="address">
      <h3 className={styles.formTitle}>寄送地址</h3>
      <section className={`${styles.formBody} col col-12`}>
        <GenderNameInput />
        <TelEmailInput />
        <AddressInput />
      </section>
    </form>
  );
}

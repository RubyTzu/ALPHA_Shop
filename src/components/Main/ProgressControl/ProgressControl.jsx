//import
import styles from "../Register/Register.module.scss"
import Phase from "./ProgressControlComponents/Phase";
import NextButton from "./ProgressControlComponents/NextButton"
import PrevButton from "./ProgressControlComponents/PrevButton"
import SubmitButton from "./ProgressControlComponents/SubmitButton"


//export
export default function ProgressControl({  onChangePage }) {
  return (
    <section
      className={`${styles.progressControlContainer} col col-lg-6 col-sm-12`}
    >
      {/* TODO:目前只有 data-phase="address" 會顯示*/}
      <Phase phase={"address"}>
        <NextButton onClick={onChangePage} />
      </Phase>

      {/* TODO:要控制 data-phase="shipping" 來顯示*/}
      <Phase phase={"shipping"}>
        <PrevButton onClick={onChangePage} />
        <NextButton onClick={onChangePage} />
      </Phase>

      {/* TODO:要控制 data-phase="credit-card" 來顯示*/}
      <Phase phase={"credit-card"}>
        <PrevButton onClick={onChangePage} />
        <SubmitButton />
      </Phase>
    </section>
  );
}



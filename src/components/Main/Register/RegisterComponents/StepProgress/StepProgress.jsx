//import
import styles from "../../Register.module.scss";
import ProgressGroup from "./StepProgressComponents/ProgressGroup"

//export
export default function StepProgress() {
  return (
    <section className={`${styles.progressContainer} col col-12`}>
      <ProgressGroup />
    </section>
  );
}

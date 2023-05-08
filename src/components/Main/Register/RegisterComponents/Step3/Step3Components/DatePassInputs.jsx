//import
import styles from "../../../Register.module.scss";
import { cardInfoTwo } from "./cardInfoDatas";

//export
export default function DatePassInputs() {
  let Infos = cardInfoTwo;

  return (
    <div class={`${styles.col} col col-12`}>
      {Infos.map((info) => {
        return (
          <div class={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}>
            <div class={styles.inputLabel}>{info.type}</div>
            <input type="text" placeholder={info.placeHolder} />
          </div>
        );
      })}
    </div>
  );
}

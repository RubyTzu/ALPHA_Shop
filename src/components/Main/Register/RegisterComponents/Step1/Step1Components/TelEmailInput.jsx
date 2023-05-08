//import
import FormInput from "./FormInput";
import styles from "../../../Register.module.scss"

//export
export default function TelEmailInput() {
  return (
    <div className={`${styles.col} col col-12`}>
      <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
        <FormInput inputLabel={"電話"}>
          <input type="tel" placeholder="請輸入行動電話" />
        </FormInput>
      </div>
      <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
        <FormInput inputLabel={"Email"}>
          <input type="email" placeholder="請輸入電子郵件" />
        </FormInput>
      </div>
    </div>
  );
}

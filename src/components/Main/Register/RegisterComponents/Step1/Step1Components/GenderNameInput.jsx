//import
import { gender } from "./Step1Data";
import FormInput from "./FormInput";
import styles from "../../../Register.module.scss"

//export
export default function GenderNameInput() {
  let genderTypes = gender;

  return (
    <div className={`${styles.col} col col-12`}>
      <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-s1`}>
        <FormInput inputLabel={"稱謂"}>
          <div className={styles.selectContainer}>
            <select>
              {genderTypes.map((type) => (
                <option value={type.value} key={type.value}>
                  {type.text}
                </option>
              ))}
            </select>
          </div>
        </FormInput>
      </div>
      <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-s2`}>
        <FormInput inputLabel={"姓名"}>
          <input type="text" placeholder="請輸入姓名" />
        </FormInput>
      </div>
    </div>
  );
}

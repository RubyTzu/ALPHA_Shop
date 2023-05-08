//import
import { cities } from "./Step1Data";
import FormInput from "./FormInput";
import styles from "../../../Register.module.scss"

//export
export default function AddressInput() {
  return (
    <div className={`${styles.col} col col-12`}>
      <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-full`}>
        <FormInput inputLabel={"縣市"}>
          <div className={styles.selectContainer}>
            <select required>
              {cities.map((city) => (
                <option value={city.value} key={city.value}>
                  {city.text}
                </option>
              ))}
            </select>
          </div>
        </FormInput>
      </div>
      <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
        <FormInput inputLabel={"縣地址"}>
          <input type="text" placeholder="請輸入地址" />
        </FormInput>
      </div>
    </div>
  );
}

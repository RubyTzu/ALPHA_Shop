//import
import { cities } from "./Step1Data";
import FormInput from "./FormInput";
import styles from "../../../Register.module.scss";
import { useContext } from "react";
import { AppContext } from "components/Contexts/AppContext";

//export
export default function AddressInput() {
  const { addressValue, setAddressValue } = useContext(AppContext);

function handleSelectPlace(value) {
  setAddressValue(
    addressValue.map((info) => {
      if (info.type === "縣市") {
        return {
          ...info,
          value: value,
        };
      }
      return info;
    })
  );
}

function handleSelectDetailPlace(value) {
  setAddressValue(
    addressValue.map((info) => {
      if (info.type === "地址") {
        return {
          ...info,
          value: value,
        };
      }
      return info;
    })
  );
}

  return (
    <div className={`${styles.col} col col-12`}>
      <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-full`}>
        <FormInput inputLabel={"縣市"}>
          <div className={styles.selectContainer}>
            <select
              required
              onChange={(e) => handleSelectPlace?.(e.target.value)}
            >
              {cities.map((city) => (
                <option value={city.text} key={city.value}>
                  {city.text}
                </option>
              ))}
            </select>
          </div>
        </FormInput>
      </div>
      <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
        <FormInput inputLabel={"地址"}>
          <input
            type="text"
            placeholder="請輸入地址"
            onChange={(e) => handleSelectDetailPlace?.(e.target.value)}
          />
        </FormInput>
      </div>
    </div>
  );
}

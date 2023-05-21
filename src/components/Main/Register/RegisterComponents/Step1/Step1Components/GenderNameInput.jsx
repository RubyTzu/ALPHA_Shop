//import
import { gender } from "./Step1Data"
import FormInput from "./FormInput";
import styles from "../../../Register.module.scss";
import { useContext } from "react";
import { AppContext } from "components/Contexts/AppContext";
//export
export default function GenderNameInput() {
  const { addressValue, setAddressValue } = useContext(AppContext);
  const genderType = gender;

  //handle select gender
  function handleSelectGender(value) {
    setAddressValue(
      addressValue.map((info) => {
        if (info.type === "稱謂") {
          return {
            ...info,
            value: value,
          };
        }
        return info;
      })
    );
  }

function handleNameChange(value) {
  setAddressValue(
    addressValue.map((info) => {
      if (info.type === "姓名") {
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
      <div className={`${styles.inputGroup} input-w-lg-2 input-w-sm-s1`}>
        <FormInput inputLabel={"稱謂"}>
          <div className={styles.selectContainer}>
            <select
              value={addressValue[0].value}
              onChange={(e) => handleSelectGender?.(e.target.value)}
            >
              {genderType.map((type) => (
                <option key={type.value} value={type.text}>
                  {type.text}
                </option>
              ))}
            </select>
          </div>
        </FormInput>
      </div>
      <div className={`${styles.inputGroup} input-w-lg-4 input-w-sm-s2`}>
        <FormInput inputLabel={"姓名"}>
          <input type="text" placeholder="請輸入姓名" onChange={e=>{handleNameChange?.(e.target.value)}}/>
        </FormInput>
      </div>
    </div>
  );
}

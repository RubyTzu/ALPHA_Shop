//import
import FormInput from "./FormInput";
import styles from "../../../Register.module.scss";
import { useContext } from "react";
import { AppContext } from "components/Contexts/AppContext";

//export
export default function TelEmailInput() {
  const { addressValue, setAddressValue } = useContext(AppContext);

function handleTelChange(value) {
  setAddressValue(
    addressValue.map((info) => {
      if (info.type === "電話") {
        return {
          ...info,
          value: value,
        };
      }
      return info;
    })
  );
}

function handleEmailChange(value) {
  setAddressValue(
    addressValue.map((info) => {
      if (info.type === "Email") {
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
      <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
        <FormInput inputLabel={"電話"}>
          <input
            type="tel"
            placeholder="請輸入行動電話"
            onChange={(e) => handleTelChange?.(e.target.value)}
          />
        </FormInput>
      </div>
      <div className={`${styles.inputGroup} input-w-lg-3 input-w-sm-full`}>
        <FormInput inputLabel={"Email"}>
          <input
            type="email"
            placeholder="請輸入電子郵件"
            onChange={(e) => handleEmailChange?.(e.target.value)}
          />
        </FormInput>
      </div>
    </div>
  );
}

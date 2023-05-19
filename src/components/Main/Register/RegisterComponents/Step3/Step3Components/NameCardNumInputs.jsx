//import
import styles from "../../../Register.module.scss";
import { useContext } from "react";
import {
  CardInfoContext,
  HandleCardInfoChangeContext,
} from "components/Contexts/AllContext";

//export
export default function NameCardNumInputs() {
  const Infos = useContext(CardInfoContext);
  const onChange = useContext(HandleCardInfoChangeContext);

  return (
    <>
      {Infos.map((info) => {
        if (info.id < 2) {
          return (
            <div key={info.id} className={`${styles.col} col col-12`}>
              <div
                className={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}
              >
                <div className={styles.inputLabel}>{info.type}</div>
                <input
                  type="text"
                  placeholder={info.placeHolder}
                  value={info.value}
                  onChange={(e) => {
                    onChange(e.target.value, info.id);
                  }}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

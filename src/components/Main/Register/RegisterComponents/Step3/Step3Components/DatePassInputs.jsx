//import
import styles from "../../../Register.module.scss";
import { useContext } from "react";
import {
  CardInfoContext,
  HandleCardInfoChangeContext,
} from "components/Contexts/AllContext";


//export
export default function DatePassInputs() {
  const Infos = useContext(CardInfoContext);
  const onChange = useContext(HandleCardInfoChangeContext);

  return (
    <div className={`${styles.col} col col-12`}>
      {Infos.map((info) => {
        if (info.id > 1) {
          return (
            <div
              key={info.id}
              className={`${styles.inputGroup} input-w-lg-3 input-w-sm-s3`}
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
          );
        }
        return null;
      })}
    </div>
  );
}

//import
import styles from "../../../Register.module.scss";
import { useContext } from "react";
import { CardInfoContext } from "components/Contexts/CardInfoContext";
import { HandleCardInfoChangeContext } from "components/Contexts/HandleCardInfoChangeContext";

//export
export default function NameCardNumInputs() {
  const Infos = useContext(CardInfoContext);
  const onChange = useContext(HandleCardInfoChangeContext);

  return (
    <>
      {Infos.map((info) => {
        if (info.id < 2) {
          return (
            <div key={info.id} class={`${styles.col} col col-12`}>
              <div class={`${styles.inputGroup} input-w-lg-4 input-w-sm-full`}>
                <div class={styles.inputLabel}>{info.type}</div>
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

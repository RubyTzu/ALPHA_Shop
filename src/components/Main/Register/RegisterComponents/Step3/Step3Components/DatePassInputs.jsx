//import
import styles from "../../../Register.module.scss";
import { useContext } from "react";
import { AppContext } from "components/Contexts/AppContext";

//export
export default function DatePassInputs() {
    const { cardValue, setCardValue } = useContext(AppContext);

   function handleCardInfoChange(infoValue, infoId) {
     let nextValue = cardValue.map((info) => {
       if (info.id === infoId) {
         return {
           ...info,
           value: infoValue,
         };
       }
       return info;
     });

     setCardValue(nextValue);
   }

  return (
    <div className={`${styles.col} col col-12`}>
      {cardValue.map((info) => {
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
                  handleCardInfoChange(e.target.value, info.id);
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

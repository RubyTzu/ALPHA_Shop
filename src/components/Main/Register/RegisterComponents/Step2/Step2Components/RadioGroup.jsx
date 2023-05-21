//import
import styles from "../../../Register.module.scss";
import { shippingTypes } from "./shippingTypesData";
import { useContext } from "react";
import { AppContext } from "components/Contexts/AppContext";

//export
export default function RadioGroup() {
  const types = shippingTypes;
  const { shippingValue, setShippingValue } = useContext(AppContext);

  function handleShippingType(type, price, time) {
    setShippingValue(
      shippingValue.map((info) => {
        if (info.type === "運送方式") {
          return {
            ...info,
            value: type,
          };
        }
        if (info.type === "運費") {
          return {
            ...info,
            value: price,
          };
        }
        if (info.type === "配送時間") {
          return {
            ...info,
            value: time,
          };
        }
        return info;
      })
    );
  }

  return (
    <>
      {types.map((type) => {
        return (
          <label
            key={type.id}
            className={`${styles.radioGroup} col col-12`}
            data-price={type.price}
          >
            <input
              id={type.id}
              type="radio"
              name="shipping"
              onChange={(e) =>
                handleShippingType(type.type, type.price, type.time)
              }
            />
            <div className={styles.radioInfo}>
              <div className="col col-12">
                <div className={styles.text}>{type.type}</div>
                <div className={styles.price}></div>
              </div>
              <div className={`${styles.period} col col-12`}>{type.time}</div>
            </div>
            <div className={styles.radioBoxBorder}></div>
          </label>
        );
      })}
    </>
  );
}

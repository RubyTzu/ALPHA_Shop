//import
import styles from "../../../Register.module.scss"
import { shippingTypes } from "./shippingTypesData";

//export
export default function RadioGroup() {
  const types = shippingTypes;

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
              defaultChecked={type.selected ? true : false}
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

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
            class={`${styles.radioGroup} col col-12`}
            data-price={type.price}
          >
            <input
              id={type.id}
              type="radio"
              name="shipping"
              checked={type.selected ? "checked" : ""}
            />
            <div class={styles.radioInfo}>
              <div class="col col-12">
                <div class={styles.text}>{type.type}</div>
                <div class={styles.price}></div>
              </div>
              <div class={`${styles.period} col col-12`}>{type.time}</div>
            </div>
            <div class={styles.radioBoxBorder}></div>
          </label>
        );
      })}
    </>
  );
}

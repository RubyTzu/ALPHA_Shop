//import
import styles from "../Cart.module.scss"

//export
export default function ShippingPrice() {
  return (
    <section className={`${styles.cartInfo} shipping col col-12`}>
      <div className={styles.text}>運費</div>
      <div className={styles.price}>免費</div>
    </section>
  );
}

//import
import { useContext } from "react";
import { AppContext } from "components/Contexts/AppContext";
import styles from "../Cart.module.scss"

//export
export default function ShippingPrice() {
  const {shippingValue} = useContext(AppContext)
  
 let shippingPriceCurrency = Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD",
   maximumSignificantDigits: 3,
 }).format(shippingValue[1].value);

  return (
    <section className={`${styles.cartInfo} shipping col col-12`}>
      <div className={styles.text}>運費</div>
      <div className={styles.price}>{shippingPriceCurrency}</div>
    </section>
  );
}

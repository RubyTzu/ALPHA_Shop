//import
import { useContext } from "react";
import styles from "../Cart.module.scss";
import { AppContext } from "components/Contexts/AppContext";

//export
export default function TotalPrice({ productsData }) {
  const {shippingValue} =useContext(AppContext)
  let totalPrice = 0;

  productsData.forEach(
    (product) => (totalPrice += product.price * product.quantity)
  );

  totalPrice += Number(shippingValue[1].value);

  let totalPriceCurrency = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits: 3,
  }).format(totalPrice);

  return (
    <section className={`${styles.cartInfo} total col col-12`}>
      <div className={styles.text}>小計</div>
      <div className={styles.price}>{totalPriceCurrency}</div>
    </section>
  );
}

//import
import styles from "../Cart.module.scss"

//export
export default function TotalPrice({ productsData }) {
  let totalPrice = 0;

  productsData.forEach(
    (product) => (totalPrice += product.price * product.quantity)
  );

   let totalPriceCurrency = Intl.NumberFormat("en-US", {
     style: "currency", 
     currency: "USD",
     maximumSignificantDigits: 3
   }).format(totalPrice);

  return (
    <section className={`${styles.cartInfo} total col col-12`}>
      <div className={styles.text}>小計</div>
      <div className={styles.price}>{totalPriceCurrency}</div>
    </section>
  );
}

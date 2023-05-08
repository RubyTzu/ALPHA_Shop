//import
import CartItem from "./CartItem";
import styles from "../Cart.module.scss"

//export
export default function ProductList({
  productsData,
  onPlusClick,
  onMinusClick,
}) {
  return (
    <section className={`${styles.productList} col col-12`} data-total-price="0">
      {productsData.map((product) => (
        <CartItem
          {...product}
          key={product.id}
          onPlusClick={onPlusClick}
          onMinusClick={onMinusClick}
        />
      ))}
    </section>
  );
}

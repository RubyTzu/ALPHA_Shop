//import cart components
import ProductList from "./CartComponents/ProductList";
import ShippingPrice from "./CartComponents/ShippingPrice";
import TotalPrice from "./CartComponents/TotalPrice";
//import styles
import styles from "./Cart.module.scss";
// import useContext
import { useContext } from "react";
import { AppContext } from "components/Contexts/AppContext";

//export
export default function Cart() {
  const { cartItem, setCardItem } = useContext(AppContext);

  function handlePlusClick(productId) {
    setCardItem(
      cartItem.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleMinusClick(productId) {
    let nextProducts = cartItem.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    });

    nextProducts = nextProducts.filter((product) => product.quantity > 0);

    setCardItem(nextProducts);
  }

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <ProductList
        productsData={cartItem}
        onPlusClick={handlePlusClick}
        onMinusClick={handleMinusClick}
      />

      <ShippingPrice />

      <TotalPrice productsData={cartItem} />
    </section>
  );
}

//import cart components
import ProductList from "./CartComponents/ProductList"
import ShippingPrice from "./CartComponents/ShippingPrice";
import TotalPrice from "./CartComponents/TotalPrice";
//import styles
import styles from "./Cart.module.scss"
//import products data
import { products } from "./CartComponents/ProductsData"
//import useState
import { useState } from "react"


//export
export default function Cart() {
 const [productsData, setProductsData] = useState(products);


function handlePlusClick(productId) {
  setProductsData(
    productsData.map((product) => {
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
  let nextProducts = productsData.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      } else {
        return product;
      }
    })

  nextProducts = nextProducts.filter((product) => product.quantity > 0);

  setProductsData(nextProducts);
    
}

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cartTitle}>購物籃</h3>

      <ProductList
        productsData={productsData}
        onPlusClick={handlePlusClick}
        onMinusClick={handleMinusClick}
      />
      <ShippingPrice />
      <TotalPrice productsData={productsData} />
    </section>
  );
}


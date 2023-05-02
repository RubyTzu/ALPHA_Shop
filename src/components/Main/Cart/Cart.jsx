//import cart components
import ProductList from "./CartComponents/ProductList"
import ShippingPrice from "./CartComponents/ShippingPrice";
import TotalPrice from "./CartComponents/TotalPrice";

//import products data
import { products } from "./CartComponents/ProductsData"

//export
export default function Cart() {
  let productsData = products

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <ProductList productsData={productsData} />
      <ShippingPrice />
      <TotalPrice productsData={productsData} />
    </section>
  );
}

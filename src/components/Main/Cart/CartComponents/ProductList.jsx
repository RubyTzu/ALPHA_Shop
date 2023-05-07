//import
import CartItem from "./CartItem";

//export
export default function ProductList({
  productsData,
  onPlusClick,
  onMinusClick,
}) {
  return (
    <section className="product-list col col-12" data-total-price="0">
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

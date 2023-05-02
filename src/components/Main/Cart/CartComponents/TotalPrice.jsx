export default function TotalPrice({ productsData }) {
  let totalPrice = 0;

  productsData.forEach(
    (product) => (totalPrice += product.price * product.quantity)
  );

  return (
    <section className="cart-info total col col-12">
      <div className="text">小計</div>
      <div className="price">{totalPrice}</div>
    </section>
  );
}
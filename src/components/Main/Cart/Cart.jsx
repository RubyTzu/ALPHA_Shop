//import
import { ReactComponent as MinusIcon } from "icons/minus.svg";
import { ReactComponent as PlusIcon } from "icons/plus.svg";

//Item data
const products = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

//components: (ProductList),(ShippingPrice),(TotalPrice)
function ProductList({ productsData }) {
  return (
    <section className="product-list col col-12" data-total-price="0">
      {productsData.map((product) => (
        <div
          className="product-container col col-12"
          data-count={product.quantity}
          data-price={product.price}
        >
          <img className="img-container" src={product.img} alt={product.name} />
          <div className="product-info">
            <div className="product-name">{product.name}</div>
            <div className="product-control-container">
              <div className="product-control">
                <MinusIcon className="product-action minus" />
                <span className="product-count">{product.quantity}</span>
                <PlusIcon className="product-action plus" />
              </div>
            </div>
            <div className="price">{product.price}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
function ShippingPrice() {
  return (
    <section className="cart-info shipping col col-12">
      <div className="text">運費</div>
      <div className="price">0</div>
    </section>
  );
}
function TotalPrice({ productsData }) {
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

//export
export default function Cart() {
  let productsData = products.slice();

  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <ProductList productsData={productsData} />
      <ShippingPrice />
      <TotalPrice productsData={productsData} />
    </section>
  );
}

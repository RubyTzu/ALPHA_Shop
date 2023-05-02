//import svg
import { ReactComponent as MinusIcon } from "icons/minus.svg";
import { ReactComponent as PlusIcon } from "icons/plus.svg";

export default function CartItem({ name, img, price, quantity }) {
  return (
    <div
      className="product-container col col-12"
      data-count={quantity}
      data-price={price}
    >
      <img className="img-container" src={img} alt={name} />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <MinusIcon className="product-action minus" />
            <span className="product-count">{quantity}</span>
            <PlusIcon className="product-action plus" />
          </div>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}

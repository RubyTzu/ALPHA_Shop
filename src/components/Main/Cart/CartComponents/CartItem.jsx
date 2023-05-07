//import svg
import { ReactComponent as MinusIcon } from "icons/minus.svg";
import { ReactComponent as PlusIcon } from "icons/plus.svg";

export default function CartItem({
  id,
  name,
  img,
  price,
  quantity,
  onPlusClick,
  onMinusClick,
}) {
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
            <button
              className="product-button"
              onClick={() => {
                onMinusClick(id);
              }}
            >
              <MinusIcon className="product-action minus" />
            </button>
            <span className="product-count">{quantity}</span>
            <button
              className="product-button"
              onClick={() => {
                onPlusClick(id);
              }}
            >
              <PlusIcon className="product-action plus" />
            </button>
          </div>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}

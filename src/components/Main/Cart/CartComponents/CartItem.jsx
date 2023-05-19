//import
import { ReactComponent as MinusIcon } from "icons/minus.svg";
import { ReactComponent as PlusIcon } from "icons/plus.svg";
import styles from "../Cart.module.scss";

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
      className={`${styles.productContainer} col col-12`}
      data-count={quantity}
      data-price={price}
    >
      <img className={styles.imgContainer} src={img} alt={name} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <button
              className={styles.productButton}
              onClick={() => {
                onMinusClick(id);
              }}
            >
              <MinusIcon className={`${styles.productAction} minus`} />
            </button>
            <span className="product-count">{quantity}</span>
            <button
              className={styles.productButton}
              onClick={() => {
                onPlusClick(id);
              }}
            >
              <PlusIcon className={`${styles.productAction} plus`} />
            </button>
          </div>
        </div>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
}

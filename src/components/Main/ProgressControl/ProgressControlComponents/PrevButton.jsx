//import
import styles from "../../Register/Register.module.scss";
import { ReactComponent as LeftArrowIcon } from "icons/left-arrow.svg";

//export
export default function PrevButton({ onClick }) {
  return (
    <button
      value="prev"
      className={`${styles.prev} ${styles.cursorPoint}`}
      onClick={(e) => {
        onClick(e.target.value);
      }}
    >
      <LeftArrowIcon />
      上一步
    </button>
  );
}

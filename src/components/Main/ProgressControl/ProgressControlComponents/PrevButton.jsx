//import
import styles from "../../Register/Register.module.scss";
import { ReactComponent as LeftArrowIcon } from "icons/left-arrow.svg";
import { useContext } from "react";
import { AppContext } from "components/Contexts/AppContext";

//export
export default function PrevButton() {
    const { onClick } = useContext(AppContext);
  
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

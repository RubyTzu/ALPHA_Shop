//import
import styles from "../../Register/Register.module.scss"
import { ReactComponent as RightArrowIcon } from "icons/right-arrow.svg";
import { useContext } from "react";
import { HandleChangePageContext } from "components/Contexts/MainContext";

//export
export default function NextButton() {
  const onClick = useContext(HandleChangePageContext);
  
  return (
    <button
      value="next"
      className={`${styles.next} ${styles.cursorPoint}`}
      onClick={(e) => {
        onClick(e.target.value);
      }}
    >
      下一步
      <RightArrowIcon />
    </button>
  );
}

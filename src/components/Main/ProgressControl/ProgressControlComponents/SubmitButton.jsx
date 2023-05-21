import styles from "../../Register/Register.module.scss";
import { useContext } from "react";
import { AppContext } from "components/Contexts/AppContext";

export default function SubmitButton() {
  const { onSubmitPage } = useContext(AppContext);
  
  return (
    <button
      value="Submit"
      className={`${styles.next} ${styles.cursorPoint}`}
      onClick={(e) => {
        e.preventDefault();
        onSubmitPage(e.target.value);
      }}
    >
      確認下單
    </button>
  );
}

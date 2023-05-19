import styles from "../../Register/Register.module.scss";
import { useContext } from "react";
import { HandleSubmitContext } from "components/Contexts/MainContext";

export default function SubmitButton() {
  const onSubmitPage = useContext(HandleSubmitContext);
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

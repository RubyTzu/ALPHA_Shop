import { createContext } from "react"

export const CardInfoContext = createContext([
  { id: 0, type: "持卡人姓名", placeHolder: "John Doe", value: "" },
  { id: 1, type: "卡號", placeHolder: "1111 2222 3333 4444", value: "" },
  { id: 2, type: "有效期限", placeHolder: "MM/YY", value: "" },
  { id: 3, type: "CVC / CCV", placeHolder: "123", value: "" },
]);

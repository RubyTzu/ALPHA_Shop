import { createContext } from "react";

//initialStepPage
export const SetStepPageContext = createContext({
  page: 1,
  setPage: () => {},
})

//CardInfoContext
export const CardInfoContext = createContext([
  { id: 0, type: "持卡人姓名", placeHolder: "John Doe", value: "" },
  { id: 1, type: "卡號", placeHolder: "1111 2222 3333 4444", value: "" },
  { id: 2, type: "有效期限", placeHolder: "MM/YY", value: "" },
  { id: 3, type: "CVC / CCV", placeHolder: "123", value: "" },
]);

//HandleCardInfoChangeContext
export const HandleCardInfoChangeContext = createContext();

//initial Cart Context
export const CartContext = createContext([
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
]);

//set Card Context
export const SetCardContext = createContext({
  cartItem: [
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
  ],
  setCardItem: () => {},
});

//HandleChangePageContext
export const HandleChangePageContext = createContext();

//HandleSubmitContext
export const HandleSubmitContext = createContext();


//在要用到context的地方import以下所需要的context
//import { StepPageContext, CardInfoContext, HandleCardInfoChangeContext, CartContext, SetCardContext, HandleChangePageContext, HandleSubmitContext } from "components/Contexts/AllContext";
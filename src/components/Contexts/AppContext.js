import { createContext, useContext, useState } from "react";

import {
  SetStepPageContext,
  CardInfoContext,
  HandleCardInfoChangeContext,
  CartContext,
  SetCardContext,
  HandleChangePageContext,
  HandleSubmitContext,
} from "components/Contexts/MainContext";


export const AppContext = createContext();


export const AppContextProviderContext = ({ children }) => {
  const [stepPage, setStepPage] = useState(1);
  const [cartItem, setCardItem] = useState(useContext(CartContext));
  const [cardValue, setCardValue] = useState(useContext(CardInfoContext));

  function handleCartTotalPrice() {
    let totalPrice = 0;
    cartItem.forEach(
      (product) => (totalPrice += product.price * product.quantity)
    );
    let totalPriceCurrency = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 3,
    }).format(totalPrice);

    return totalPriceCurrency;
  }

  function handleCardInfoChange(infoValue, infoId) {
    let nextValue = cardValue.map((info) => {
      if (info.id === infoId) {
        return {
          ...info,
          value: infoValue,
        };
      }
      return info;
    });

    setCardValue(nextValue);
  }

  function handleChangePage(buttonValue) {
    let currentStepPage = stepPage;

    if (buttonValue === "next") {
      currentStepPage = currentStepPage + 1;
    } else if (buttonValue === "prev") {
      currentStepPage = currentStepPage - 1;
    }

    setStepPage(currentStepPage);
  }

  function handleSubmitPage(buttonValue) {
    if (buttonValue === "Submit") {
      //console.log(金額)
      console.log(`總金額: ${handleCartTotalPrice()}`);

      // console.log("姓名,卡號,有效期限,CCV");
      cardValue.forEach((info) => {
        console.log(`${info.type}: ${info.value}`);
      });
    }
  }
  return (
    <AppContext.Provider value={null}>
      <HandleSubmitContext.Provider value={handleSubmitPage}>
        <SetCardContext.Provider value={{ cartItem, setCardItem }}>
          <CardInfoContext.Provider value={cardValue}>
            <HandleCardInfoChangeContext.Provider value={handleCardInfoChange}>
              <HandleChangePageContext.Provider value={handleChangePage}>
                <SetStepPageContext.Provider value={stepPage}>
                  {children}
                </SetStepPageContext.Provider>
              </HandleChangePageContext.Provider>
            </HandleCardInfoChangeContext.Provider>
          </CardInfoContext.Provider>
        </SetCardContext.Provider>
      </HandleSubmitContext.Provider>
    </AppContext.Provider>
  );
};

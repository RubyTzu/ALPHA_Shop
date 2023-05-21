import { useState, createContext } from "react";
import {
  addressInfoData,
  shippingTypesData,
  cardInfoData,
  cartData,
} from "components/Contexts/MainData";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  //useState hook
  const [stepPage, setStepPage] = useState(1);
  const [cartItem, setCardItem] = useState(cartData);
  const [addressValue, setAddressValue] = useState(addressInfoData);
  const [shippingValue, setShippingValue] = useState(shippingTypesData);
  const [cardValue, setCardValue] = useState(cardInfoData);

  //event handler
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
      console.log(`

      -----------
      寄送地址資訊
      ----------- 
      ${addressValue[0].type}: ${addressValue[0].value}
      ${addressValue[1].type}: ${addressValue[1].value}
      ${addressValue[2].type}: ${addressValue[2].value}
      ${addressValue[3].type}: ${addressValue[3].value}
      ${addressValue[4].type}: ${addressValue[4].value}
      ${addressValue[5].type}: ${addressValue[5].value}


      -------
      運送方式
      -------
      ${shippingValue[0].type}: ${shippingValue[0].value}
      ${shippingValue[1].type}: ${shippingValue[1].value}
      ${shippingValue[2].type}: ${shippingValue[2].value}


      -------
      付款資訊
      -------
      ${cardValue[0].type}: ${cardValue[0].value}
      ${cardValue[1].type}: ${cardValue[1].value}
      ${cardValue[2].type}: ${cardValue[2].value}
      ${cardValue[3].type}: ${cardValue[3].value}


      ------
      總金額
      ------
      ${handleCartTotalPrice()}


      `);

      //付款資訊 console.log("姓名,卡號,有效期限,CCV");
      // cardValue.forEach((info) => {
      //   return(`${info.type}: ${info.value}`)
      // });
    }
  }

  function handleCartTotalPrice() {
    let totalPrice = 0;
    cartItem.forEach(
      (product) => (totalPrice += product.price * product.quantity)
    );

    totalPrice += Number(shippingValue[1].value);

    let totalPriceCurrency = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 3,
    }).format(totalPrice);

    return totalPriceCurrency;
  }


  //AppContext.Provider value
  const providerValue = {
    //useState hook
    stepPage,
    cartItem,
    setCardItem,
    addressValue,
    setAddressValue,
    shippingValue,
    setShippingValue,
    cardValue,
    setCardValue,
    //event handler
    onClick: handleChangePage,
    onSubmitPage: handleSubmitPage
  };

  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  );
};

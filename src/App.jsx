//import
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./style/main.scss";
import { useState } from "react";
//import Context
import { useContext } from "react";
import {
  CardInfoContext,
  HandleCardInfoChangeContext,
  CartContext,
  SetCardContext,
  HandleSubmitContext,
} from "components/Contexts/AllContext";

let initialStepPage = 1;

function App() {
  const [stepPage, setStepPage] = useState(initialStepPage);
  const [cardValue, setCardValue] = useState(useContext(CardInfoContext));
  const [cartItem, setCardItem] = useState(useContext(CartContext));

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
    <HandleSubmitContext.Provider value={handleSubmitPage}>
      <SetCardContext.Provider value={{ cartItem, setCardItem }}>
        <CardInfoContext.Provider value={cardValue}>
          <HandleCardInfoChangeContext.Provider value={handleCardInfoChange}>
            <div className="App">
              <Header />
              <Main stepPage={stepPage} onPage={handleChangePage} />
              <Footer />
            </div>
          </HandleCardInfoChangeContext.Provider>
        </CardInfoContext.Provider>
      </SetCardContext.Provider>
    </HandleSubmitContext.Provider>
  );
}

//export
export default App;

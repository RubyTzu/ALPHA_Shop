//import
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./style/main.scss";
import { useState } from "react";

let initialStepPage = 1;

function App() {
  const [stepPage, setStepPage] = useState(initialStepPage);

  function handleChangePage(buttonValue) {
    let currentStepPage = stepPage;

    if (buttonValue === "next") {
      currentStepPage = currentStepPage + 1;
    } else if (buttonValue === "prev") {
      currentStepPage = currentStepPage - 1;
    }

    setStepPage(currentStepPage);
  }

  return (
    <div className="App">
      <Header />
      <Main stepPage={stepPage} onPage={handleChangePage} />
      <Footer />
    </div>
  );
}

//export
export default App;

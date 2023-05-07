import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./style/main.scss";
import { useState } from "react";

let initialStepPage = 1;

function App() {
  const [stepPage, setStepPage] = useState(initialStepPage);


  function handlePrevPage() {
    let currentStepPage = stepPage;
    currentStepPage = currentStepPage - 1;

    setStepPage(currentStepPage);
  }

  function handleNextPage() {
    let currentStepPage = stepPage;
    currentStepPage = currentStepPage + 1;

    setStepPage(currentStepPage);
  }

  return (
    <div className="App">
      <Header />
      <Main
        stepPage={stepPage}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
      />
      <Footer />
    </div>
  );
}

export default App;

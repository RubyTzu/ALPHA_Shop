//import
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./style/main.scss";
//import Context
import { AppContextProvider } from "components/Contexts/AppContext";


function App() {

  return (
    <AppContextProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppContextProvider>
  );
}

//export
export default App;

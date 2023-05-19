//import
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./style/main.scss";
//import Context
import { AppContextProviderContext } from "components/Contexts/AppContext";


function App() {

  return (
    <AppContextProviderContext>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </AppContextProviderContext>
  );
}

//export
export default App;

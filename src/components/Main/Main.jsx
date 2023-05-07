//import
import Register from "./Register/Register";
import ProgressControl from "./ProgressControl/ProgressControl";
import Cart from "./Cart/Cart";

//stepPage={stepPage} onPrevPage={handlePrevPage} onNextPage={handleNextPage}


//export
export default function Main({ stepPage, onPrevPage, onNextPage }) {
  return (
    <main class="site-main">
      <div class="main-container">
        {/* <!-- register --> */}
        <Register page={stepPage} />
        {/* <!-- cart --> */}
        <Cart />
        {/* <!-- progress-control --> */}
        <ProgressControl onPrevStep={onPrevPage} onNextStep={onNextPage} />
      </div>
    </main>
  );
}

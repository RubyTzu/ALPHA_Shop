//import
import Register from "./Register/Register";
import ProgressControl from "./ProgressControl/ProgressControl";
import Cart from "./Cart/Cart";

//stepPage={stepPage} onPage={handleChangePage}

//export
export default function Main({ stepPage, onPage }) {
  return (
    <main class="site-main">
      <div class="main-container">
        {/* <!-- register --> */}
        <Register page={stepPage} />
        {/* <!-- cart --> */}
        <Cart />
        {/* <!-- progress-control --> */}
        <ProgressControl onChangePage={onPage} />
      </div>
    </main>
  );
}

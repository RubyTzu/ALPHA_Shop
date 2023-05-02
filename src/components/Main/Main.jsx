//import
import Register from "./Register/Register";
import ProgressControl from "./ProgressControl/ProgressControl";
import Cart from "./Cart/Cart";

//export
export default function Main() {
  return (
    <main class="site-main">
      <div class="main-container">
        {/* <!-- register --> */}
        <Register />
        {/* <!-- cart --> */}
        <Cart />
        {/* <!-- progress-control --> */}
        <ProgressControl />
      </div>
    </main>
  );
}

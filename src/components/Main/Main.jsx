//import
import Register from "./Register/Register";
import ProgressControl from "./ProgressControl/ProgressControl";
import Cart from "./Cart/Cart";

//stepPage={stepPage} onPage={handleChangePage}

//export
export default function Main() {


  return (
    <main className="site-main">
      <div className="main-container">
        
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

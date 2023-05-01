//import
import Register from './Register/Register'
import ProgressControl from './ProgressControl/ProgressControl'

//export
export default function Main() {
    return (
    <main class="site-main">
        <div class="main-container">
            {/* <!-- register --> */}
            <Register />

            {/* <!-- cart --> */}

            {/* <!-- progress-control --> */}
            <ProgressControl />
        </div>
    </main>
    )
}
//import
import { ReactComponent as ACLogo } from "icons/logo.svg"
import {ReactComponent as ToggleIcon } from "icons/toggle.svg"
import { ReactComponent as SearchIcon } from "icons/search.svg"
import { ReactComponent as CartIcon } from "icons/cart.svg"
// import { ReactComponent as MoonIcon } from "icons/moon.svg"
import { ReactComponent as SunIcon } from "icons/sun.svg"


//export
export default function Header() {
    return (
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* <!-- navbar-toggle --> */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label for="navbar-toggle" className="burger-container">
            <ToggleIcon className="icon-toggle cursor-point" />
          </label>

          {/* <!-- navbar-menu --> */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  男款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  女款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  最新消息
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  客製商品
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">
              {/* <!-- search --> */}
              <li className="nav-item">
                <SearchIcon className="nav-icon cursor-point" />
              </li>
              {/* <!-- cart --> */}
              <li className="nav-item">
                <CartIcon className="nav-icon cursor-point" />
              </li>
              <li id="theme-toggle" className="nav-item">
                {/* <!-- moon --> */}
                {/* <MoonIcon className="nav-icon cursor-point" /> */}
                {/* <!-- sun --> */}
                <SunIcon className="nav-icon cursor-point" />
              </li>
            </ul>
          </nav>

          {/* <!-- logo --> */}
          <a className="header-logo-container" href="/">
            <ACLogo className="icon-logo cursor-point" />
          </a>
        </div>
      </header>
    );
}
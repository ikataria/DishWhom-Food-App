import { useState } from "react";
import { Link } from "react-router-dom";
import LOCAL_LOGO from "../utils/images/DishwhomLogo.png";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img
              src={LOCAL_LOGO}
              alt="logo"
              className="logo"
              width="307px"
              height="206px"
            />
          </Link>
        </div>
        <div className="nav-items-container">
          <ul className="nav-items regular-text">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <li className="login-btn-wrapper">
              <Link to="/login">
                <button
                  className="login-btn"
                  onClick={() => {
                    loginBtn === "Login"
                      ? setLoginBtn("Logout")
                      : setLoginBtn("Login");
                  }}
                >
                  {loginBtn}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;

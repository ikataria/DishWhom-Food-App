import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import LOCAL_LOGO from "../utils/images/DishwhomLogo.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

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

        <div>
          <h4 className="mt-2 font-normal capitalize">
            {loggedInUser ? "Welcome " + loggedInUser : ""}{" "}
          </h4>
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
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping">
                  ( {cartItems.length})
                </i>
              </Link>
            </li>
            <li className="login-btn-wrapper">
              <Link to="/login">
                <button
                  className="login-btn"
                  // onClick={() => {
                  //   loginBtn === "Login"
                  //     ? setLoginBtn("Logout")
                  //     : setLoginBtn("Login");
                  // }}
                >
                  {/* {loginBtn} */}
                  Welcome
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

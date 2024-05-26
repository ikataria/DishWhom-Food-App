import { useState } from "react";
import LOCAL_LOGO  from "../utils/images/DishwhomLogo.png";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <img
            src={LOCAL_LOGO}
            alt="logo"
            className="logo"
            width="307px"
            height="206px"
          />
        </div>
        <div className="nav-items-container">
          <ul className="nav-items">
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
            <li>🛒Cart</li>
            <button className="login-btn" onClick={()=>{
              loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")  
            }}>{loginBtn}</button>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;

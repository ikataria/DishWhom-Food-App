import React, { useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  function handleNavigate(e) {
    e.preventDefault()
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate("/");
    }, 0);
  }

  return (
    <div className="form-container login-form-wrapper">
      <form
        onSubmit={handleNavigate}
        className="contact-form login-form-container"
      >
        <h1 className="center-text">Welcome Page</h1>
        <input
          type="name"
          name="name"
          placeholder="Who we are welcoming ?"
          className="form-control inp_text"
          id="name"
          value={loggedInUser}
          onChange={(e) => {
            setUserInfo(e.target.value);
          }}
        />
        <button type="submit" >
          <span className="font-semibold">
            🙏 स्वागतम् 🙏
            </span>
          </button>
      </form>
    </div>
  );
};


export default Login;

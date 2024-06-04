import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

let schema = Yup.object().shape({
  email: Yup.string() 
  .required("Email required")
  .email("Invalid email"),
  password: Yup.string()
  .required("Password required")
  .min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();

  function handleNavigate(values) {
    // Alert the input values of the form that we filled
    alert(values);
    // setTimeout for navigate from login page to home page
    setTimeout(() => {
      navigate("/");
    }, 0);
  }

  return(
  <div>
    <Formik
       validationSchema={schema}
       initialValues={{ email: "", password: "" }}
       onSubmit={(values) => {
         // call handleNavigate and pass input filed data
         handleNavigate(JSON.stringify(values));
       }}
    >
      {({ 
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
        <div className="form-container login-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form login-form-container">
          <h1 className="center-text">Login</h1>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter your email"
              className="form-control inp_text"
              id="email"
            />
            <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Enter your password"
              className="form-control"
            />
            <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </Formik>
  </div>
  )
};

export default Login;

import { padding } from "@mui/system";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { loginActionApi } from "../../Redux/Reducers/userReducer";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./login.css";

export default function Login() {
  const dispatch = useDispatch();
  const loginFrm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("email is invalid"),
      password: yup.string().required("password cannot be blank"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const action = loginActionApi(values);
      dispatch(action);
    },
  });
  return (
    <div>
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt" data-tilt>
                <img
                  src="https://shop.cyberlearn.vn/images/adidas-prophere.png"
                  alt="IMG"
                />
              </div>
              <form
                className="login100-form validate-form"
                onSubmit={loginFrm.handleSubmit}
              >
                <span className="login100-form-title"> Member Login </span>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onInput={loginFrm.handleChange}
                    onBlur={loginFrm.handleBlur}
                  />
                  {loginFrm.errors.email && (
                    <p
                      style={{ color: "red", marginLeft: "10px" }}
                      className="text text-danger"
                    >
                      {loginFrm.errors.email}
                    </p>
                  )}

                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onInput={loginFrm.handleChange}
                    onBlur={loginFrm.handleBlur}
                  />
                  {loginFrm.errors.password && (
                    <p
                      style={{ color: "red", marginLeft: "10px" }}
                      className="text text-danger"
                    >
                      {loginFrm.errors.password}
                    </p>
                  )}
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                <div className="container-login100-form-btn">
                  <button type="submit" className="login100-form-btn">
                    Login
                  </button>
                </div>
                <div className="container-login100-form-btn">
                  <button
                    className="login100-form-btn"
                    style={{ background: "blue" }}
                    onClick={() => {}}
                  >
                    <FacebookOutlinedIcon sx={{}} />
                    Continute with Facebook
                  </button>
                </div>
                <div className="text-center p-t-12">
                  <span className="txt1"> Forgot </span>
                  <a className="txt2" href="#">
                    Username / Password?
                  </a>
                </div>
                <div className="text-center p-t-136">
                  <NavLink className="txt2" to="/register">
                    Create your Account
                    <i
                      className="fa fa-long-arrow-right m-l-5"
                      aria-hidden="true"
                    />
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

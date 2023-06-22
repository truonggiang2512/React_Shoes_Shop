import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { http } from "../../Utils/config";
import { margin } from "@mui/system";
export default function Register() {
  const [selected, setSelected] = useState("true");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
  const navigate = useNavigate();
  const registerfrm = useFormik({
    initialValues: {
      email: "",
      password: "",
      gender: "true",
      name: "",
      phone: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be blank!")
        .email("Email is invalid !"),
      password: yup
        .string()
        .required("password cannot be blank!")
        .min(6, "6 - 32 characters")
        .max(32, "6 - 32 characters"),
      name: yup.string().required("name cannot be blank"),
      phone: yup
        .string()
        .required("phone cannot be blank")
        .matches(/\d$/, "phone is numbers"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await http.post("/api/Users/signup", values);
        alert(res.data?.message);
        navigate("/login");
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });

  return (
    <div>
      <div>
        <div>
          <h1 style={{ textAlign: "center" }}>My Account</h1>
        </div>
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
                onSubmit={registerfrm.handleSubmit}
              >
                <span className="login100-form-title"> Member Register </span>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onInput={registerfrm.handleChange}
                    onBlur={registerfrm.handleBlur}
                  />
                  {registerfrm.errors.email && (
                    <p
                      style={{ color: "red ", marginLeft: "10px" }}
                      className="alert  alert-danger"
                    >
                      {registerfrm.errors.email}{" "}
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
                    onInput={registerfrm.handleChange}
                    onBlur={registerfrm.handleBlur}
                  />
                  {registerfrm.errors.password && (
                    <p
                      style={{ color: "red ", marginLeft: "10px" }}
                      className="alert  alert-danger"
                    >
                      {registerfrm.errors.password}{" "}
                    </p>
                  )}
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onInput={registerfrm.handleChange}
                    onBlur={registerfrm.handleBlur}
                  />
                  {registerfrm.errors.name && (
                    <p
                      style={{ color: "red ", marginLeft: "10px" }}
                      className="alert  alert-danger"
                    >
                      {registerfrm.errors.name}{" "}
                    </p>
                  )}
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    onInput={registerfrm.handleChange}
                    onBlur={registerfrm.handleBlur}
                  />
                  {registerfrm.errors.phone && (
                    <p
                      style={{ color: "red ", marginLeft: "10px" }}
                      className="alert  alert-danger"
                    >
                      {registerfrm.errors.phone}{" "}
                    </p>
                  )}
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <div className="form-group mt-2">
                    <p>Gender</p>
                    <input
                      className="form-check-input"
                      id="true"
                      name="gender"
                      type="radio"
                      value={true}
                      checked={selected === "true"}
                      onChange={handleChange}
                    />
                    <label for="true">Male</label>
                    <input
                      className="form-check-input"
                      id="false"
                      name="gender"
                      type="radio"
                      value={false}
                      checked={selected === "false"}
                      onChange={handleChange}
                    />{" "}
                    <label for="false">Female</label>
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <button type="submit" className="login100-form-btn">
                    Submit
                  </button>
                </div>
                <div className="text-center p-t-136">
                  <NavLink className="txt2" to="/login">
                    Have an account?
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

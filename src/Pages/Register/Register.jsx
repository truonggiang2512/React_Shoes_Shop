import React from "react";

export default function Register() {
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
              <form className="login100-form validate-form">
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
                  />
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
                    name="pass"
                    placeholder="Password"
                  />
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
                  />
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
                  />
                  <span className="focus-input100" />
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true" />
                  </span>
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <div className="form-group mt-2 ">
                    <p>Gender</p>
                    <input
                      className="form-check-input"
                      id="gender1"
                      name="gender"
                      type="radio"
                      value={true}
                    />
                    <label for="gender1">Male</label>
                    <input
                      className="form-check-input"
                      id="gender2"
                      name="gender"
                      type="radio"
                      value={false}
                    />{" "}
                    <label for="gender2">Female</label>
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <button type="submit" className="login100-form-btn">
                    Submit
                  </button>
                </div>
                <div className="text-center p-t-136">
                  <a className="txt2" href="#">
                    Have an account?
                    <i
                      className="fa fa-long-arrow-right m-l-5"
                      aria-hidden="true"
                    />
                  </a>
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

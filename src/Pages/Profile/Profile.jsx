import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/system";
import { Button } from "@mui/base";
import Avatar from "@mui/material/Avatar";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileApi,
  updateProfile,
  updateProfileAction,
} from "../../Redux/Reducers/userReducer";
import storage from "../../Utils/storage";
import { USER_LOGIN } from "../../Utils/constant";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
export default function Profile() {
  const { userProfile } = useSelector((state) => state.userReducer);
  const orderRow = useSelector((state) => state.userReducer.orderProfile);
  const [selected, setSelected] = useState(`${userProfile?.gender}`);
  const [rows, setRows] = useState(orderRow);
  useEffect(() => {
    setRows(orderRow);
  }, [orderRow]);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  const dispatch = useDispatch();

  const getProfileApiFunction = async () => {
    const actionAsync = getProfileApi();
    dispatch(actionAsync);
  };
  const emailStorage = storage.get(USER_LOGIN);
  useEffect(() => {
    getProfileApiFunction();
  }, []);
  const updateFrm = useFormik({
    initialValues: {
      email: `${emailStorage?.email}`,
      password: "",
      gender: "true",
      name: "",
      phone: "",
    },
    validationSchema: yup.object().shape({
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

      const actionAsync = updateProfile(values);
      dispatch(actionAsync);
    },
  });

  return (
    <Container>
      <Box py={3}>
        <Typography> Hello {userProfile?.name} !</Typography>
        <Grid container spacing={3} columns={10} minHeight={160}>
          <Grid item xs={10} sm={5}>
            <Avatar
              sx={{ width: "200px", height: "200px" }}
              src={userProfile?.avatar}
            ></Avatar>
          </Grid>
          <Grid item xs={10} sm={5}>
            <form className="" onSubmit={updateFrm.handleSubmit}>
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <label htmlFor="" style={{ marginLeft: "20px" }}>
                  Email
                </label>
                <input
                  className="input100"
                  type="text"
                  name="email"
                  initialValues={emailStorage?.email}
                  value={emailStorage?.email}
                  disabled={true}
                />
                {updateFrm.errors.email && (
                  <p
                    style={{ color: "red ", marginLeft: "10px" }}
                    className="alert  alert-danger"
                  >
                    {updateFrm.errors.email}{" "}
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
                <label htmlFor="" style={{ marginLeft: "20px" }}>
                  {" "}
                  Password
                </label>
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="***********"
                  onInput={updateFrm.handleChange}
                  onBlur={updateFrm.handleBlur}
                />
                {updateFrm.errors.password && (
                  <p
                    style={{ color: "red ", marginLeft: "10px" }}
                    className="alert  alert-danger"
                  >
                    {updateFrm.errors.password}{" "}
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
                <label htmlFor="" style={{ marginLeft: "20px" }}>
                  Name
                </label>
                <input
                  className="input100"
                  type="text"
                  name="name"
                  placeholder={userProfile?.name}
                  onInput={updateFrm.handleChange}
                  onBlur={updateFrm.handleBlur}
                />
                {updateFrm.errors.name && (
                  <p
                    style={{ color: "red ", marginLeft: "10px" }}
                    className="alert  alert-danger"
                  >
                    {updateFrm.errors.name}{" "}
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
                <label htmlFor="" style={{ marginLeft: "20px" }}>
                  Phone Number
                </label>
                <input
                  className="input100"
                  type="text"
                  name="phone"
                  placeholder={userProfile?.phone}
                  onInput={updateFrm.handleChange}
                  onBlur={updateFrm.handleBlur}
                />
                {updateFrm.errors.phone && (
                  <p
                    style={{ color: "red ", marginLeft: "10px" }}
                    className="alert  alert-danger"
                  >
                    {updateFrm.errors.phone}{" "}
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
                <div className="form-group mt-2 ">
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
                  Update
                </button>
              </div>
            </form>
          </Grid>
        </Grid>
        <hr />
        <Typography>Oder History</Typography>
        <Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderRow.map((item, index) =>
                  item?.orderDetail.map((product) => (
                    <TableRow key={index}>
                      <TableCell>
                        <p>{product.name}</p>
                      </TableCell>
                      <TableCell>
                        <img
                          src={product.image}
                          alt={product.name}
                          width="50"
                        />
                      </TableCell>
                      <TableCell>
                        <p>{product.shortDescription}</p>
                      </TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                      <TableCell>${product.price}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
}

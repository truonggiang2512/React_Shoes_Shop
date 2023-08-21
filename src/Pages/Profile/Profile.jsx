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

export default function Profile() {
  const { userProfile } = useSelector((state) => state.userReducer);
  const [selected, setSelected] = useState(`${userProfile?.gender}`);

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

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <img src={params.value} width={100} alt="" />
          </>
        );
      },
    },
    { field: "name", headerName: "Name", width: 160 },
    {
      field: "quality",
      headerName: "Quality",
      width: 120,
      sortable: false,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        const onClickTang = (e) => {
          const currentRow = params.row.quality;
          return setValue(value + 1);
        };
        const onClickGiam = (e) => {
          const currentRow = params.row.quality;
          return setValue(value - 1);
        };

        return (
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" size="small" onClick={onClickGiam}>
              -
            </Button>
            <h4>{value}</h4>
            <Button variant="outlined" size="small" onClick={onClickTang}>
              +
            </Button>
          </Stack>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => params.row.price * value,
    },
  ];
  const rows = [
    {
      id: 1,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      name: "Jon",
      price: 1000,
    },
    {
      id: 2,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      name: "Cersei",
      price: 3000,
    },
    {
      id: 3,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      name: "Jaime",
      price: 1000,
    },
    {
      id: 4,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      name: "Arya",
      price: 1000,
    },
    {
      id: 5,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      name: "Daenerys",
      price: 1000,
    },
    {
      id: 6,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      name: null,
      price: 1000,
    },
    {
      id: 7,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      name: "Ferrara",
      price: 1000,
    },
    {
      id: 8,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      name: "Rossini",
      price: 1000,
    },
    {
      id: 9,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      name: "Harvey",
      price: 1000,
    },
  ];
  const [arrId, setArrId] = useState([]);
  const [value, setValue] = useState(1);
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
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              onRowSelectionModelChange={(id) => {
                setArrId(id);
              }}
            />
          </div>
        </Box>
      </Box>
    </Container>
  );
}

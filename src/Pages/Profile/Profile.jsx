import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/system";
import { Button } from "@mui/base";
import Avatar from "@mui/material/Avatar";

export default function Profile() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 160,
      renderCell: (params) => {
        console.log(params);
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
          // return alert(JSON.stringify(currentRow, null, 4));
          return setValue(value + 1);
        };
        const onClickGiam = (e) => {
          const currentRow = params.row.quality;
          // return alert(JSON.stringify(currentRow, null, 4));
          return setValue(value - 1);
        };

        return (
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={onClickGiam}
            >
              -
            </Button>
            <h4>{value}</h4>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={onClickTang}
            >
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
    {
      field: "delete",
      headerName: "Delete",
      width: 120,
      sortable: false,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        const onClick = (e) => {
          const currentRow = params.row;
          return alert(JSON.stringify(currentRow, null, 4));
        };

        return (
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={onClick}
            >
              Delete
            </Button>
          </Stack>
        );
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 120,
      sortable: false,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        const onClick = (e) => {
          const currentRow = params.row;
          return alert(JSON.stringify(currentRow, null, 4));
        };

        return (
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="warning"
              size="small"
              onClick={onClick}
            >
              Edit
            </Button>
          </Stack>
        );
      },
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

  const handleDeleteAll = () => {
    console.log(arrId);
  };
  return (
    <Container>
      <Box>
        <Typography>Profile</Typography>
        <Grid
          paddingTop={10}
          container
          spacing={3}
          columns={10}
          minHeight={160}
        >
          <Grid item xs={10} sm={5}>
            <img
              src="../../../public/img/3062756a297f1e3c22e35f3fe89b3ecc-320.jpeg"
              alt=""
            />
          </Grid>
          <Grid item xs={10} sm={5}>
            <form className="">
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

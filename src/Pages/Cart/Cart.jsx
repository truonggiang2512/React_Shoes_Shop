import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/base";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantityAction,
  delProductAction,
  postProductAction,
  postProductApi,
} from "../../Redux/Reducers/CartReducer";
import { http } from "../../Utils/config";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Cart() {
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
        return (
          <Stack direction="row" spacing={2}>
            <Box>
              <Button
                variant="outlined"
                style={{ marginRight: "10px" }}
                onClick={() => {
                  const action = changeQuantityAction({
                    id: params.id,
                    quantity: -1,
                  });
                  if (params.row.quantity < 1) {
                    window.alert("Bạn có muốn xoá sản phẩm này không");
                    const action = delProductAction(params.row.id);
                    dispatch(action);
                  } else {
                    dispatch(action);
                  }
                }}
              >
                -
              </Button>
              {params.row.quantity}
              <Button
                variant="outlined"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  const action = changeQuantityAction({
                    id: params.id,
                    quantity: 1,
                  });

                  dispatch(action);
                }}
              >
                +
              </Button>
            </Box>
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
      valueGetter: (params) => params.row.price * params.row.quantity,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 120,
      sortable: false,
      disableClickEventBubbling: true,

      renderCell: (params) => {
        const onClick = (e) => {
          const action = delProductAction(params.row.id);
          dispatch(action);
        };

        return (
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" size="small" onClick={onClick}>
              Delete
            </Button>
          </Stack>
        );
      },
    },
  ];

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartReducer);
  console.log(cart);
  const { orderDetail } = useSelector((state) => state.CartReducer);
  const postProductApi = async (id, quantity) => {
    const result = await http.post("/api/Users/order", { id, quantity });
    //Đưa dữ liệu lấy tự api về vào state
  };
  const getProductDetailApi = async () => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Users/order`,
      method: "POST",
    });
  };
  return (
    <Container>
      <Box>
        <Typography>Card</Typography>

        <hr />
        <Box sx={{ marginTop: "40px" }}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={cart}
              columns={columns}
              getRowId={(row) => row.id}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              onRowSelectionModelChange={() => {}}
            />
          </div>
        </Box>
        <Button
          style={{
            padding: "10px 20px 10px 20px ",
            background: "green",
            marginTop: "10px",
            textAlign: "right",
            fontSize: "20px",
          }}
          size="small"
          onClick={() => {
            cart?.map((item) => {
              const action = postProductAction(item);

              dispatch(action);
              postProductApi();
            });
          }}
        >
          Submit Order
        </Button>
      </Box>
    </Container>
  );
}

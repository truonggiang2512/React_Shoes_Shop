import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantityAction,
  delProductAction,
  postProductAction,
} from "../../Redux/Reducers/CartReducer";
import { http } from "../../Utils/config";
import storage from "../../Utils/storage";
import { USER_LOGIN } from "../../Utils/constant";

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
              <button
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
              </button>
              {params.row.quantity}
              <button
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
              </button>
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
  const { orderDetail } = useSelector((state) => state.CartReducer);
  const [rows, setRows] = useState(cart);
  useEffect(() => {
    setRows(cart);
  }, [cart]);
  const email = storage.get(USER_LOGIN);
  return (
    <Container>
      <Box>
        <Typography>Card</Typography>

        <hr />
        <Box sx={{ marginTop: "40px" }}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
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
        <Box py={2} sx={{ display: "flex", gap: 1 }}>
          <Box>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                return cart.map((item) => {
                  const action = postProductAction(item);
                  dispatch(action);
                });
              }}
            >
              Save Order
            </Button>
          </Box>
          <Box px={10}>
            <Button variant="contained" onClick={() => {}}>
              Submit Order
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../Utils/config";

export const buyProductAsync = createAsyncThunk(
  "buyProductAsync",
  async (formSubmit) => {
    try {
      const res = await http.post("Users/order", formSubmit);
      console.log("Response:", res.data.content);
      return res.data.content;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
);

const buyProductSlice = createSlice({
  name: "buyProductSlice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(buyProductAsync.fulfilled, (state, action) => {
        // Handle the fulfilled action if needed
      })
      .addCase(buyProductAsync.rejected, (state, action) => {
        // Handle the rejected action if needed
      });
  },
});

export default buyProductSlice.reducer;

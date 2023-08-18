import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../../Utils/config';

const initialState = {
  arrSearch: []
}

const searchReducer = createSlice({
  name: second,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchNameAsync.pending, (state, action) => {
    })
      .addCase(searchNameAsync.fulfilled, (state, action) => {
        state.arrSearch = action.payload
      })
      .addCase(searchNameAsync.rejected, (state, action) => {
      })
  }

});

export const { } = searchReducer.actions

export default searchReducer.reducer
export const searchNameAsync = createAsyncThunk(
  "searchNameAsync",
  async (search) => {
    try {
      const res = await http.get(`Product`, search);
      return res.data.content;
    } catch (error) {
      console.error("Error during fetching jobs:", error);
      throw error;
    }
  }
);
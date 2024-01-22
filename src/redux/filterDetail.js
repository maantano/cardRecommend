import { createSlice, current } from "@reduxjs/toolkit";
import { asyncUpFetch } from "../components/About/Section1";

const filterDetail = createSlice({
  name: "filterDetailReducer",
  initialState: {
    list: [],
    status: "Start",
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      const payload = action.payload;
      if (current(state.list).includes(payload)) {
        let idx = state.list.indexOf(payload);
        state.list.splice(idx, 1);
      } else {
        state.list = payload;
      }
      state.status = "complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default filterDetail;

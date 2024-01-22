import { createSlice, current } from "@reduxjs/toolkit";
import { asyncUpFetch } from "../components/About/Section1";

const filter = createSlice({
  name: "filterReducer",
  initialState: {
    list: [],
    status: "Start",
    cardType: "",
    benefitCount: "",
    refresh: false,
    cur: "",
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
      // console.log(
      //   "action.meta.arg.cardType =====>",
      //   action.meta.arg.cardType
      // );
      if (action.meta.arg.cardType) {
        state.cardType = action.meta.arg.cardType;
      }
      state.cur = action.meta.arg.cur;
      state.refresh = action.meta.arg.refresh;
      state.checkedList = action.meta.arg.checkedList;
      state.status = "complete";
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default filter;

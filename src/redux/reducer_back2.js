import { combineReducers } from "redux";
import { createSlice, current } from "@reduxjs/toolkit";
import { asyncUpFetch } from "../components/About/Section1";
const checkInitial = {
  done: {
    id: "",
    chk: false,
  },
};
export const CheckIsDone = createSlice({
  name: "checkReducer",
  initialState: { checkInitial, status: "Start" },
  reducers: {
    toggleDone: (state, action) => {
      const { id, chk } = action.payload;
      state[id].chk = chk;
      console.log("state ===>", state);
      console.log("action ===>", action);
    },
  },
});

const filter = createSlice({
  name: "filterReducer2",
  initialState: { list: [], status: "Start", cardTypeChk: "" },
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
      state.cardTypeChk = action.meta.arg.cardTypeChk;
      console.log(action.meta.arg.cardTypeChk);
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});
export const { toggleDone } = CheckIsDone.actions;
export const { filterlist, filterlist2 } = filter.actions;

export default filter;

import { createSlice, current } from "@reduxjs/toolkit";
import { asyncBankUpFetch } from "../components/About/Section2";

const eventReducer = createSlice({
  name: "eventReducerReducer",
  //   initialState: {},
  initialState: {
    list: [],
    status: "Start",
    eventType: "",
    bankCount: "",
    refresh: false,
    cur: "",
  },
  reducers: {
    eventReducerClick: (state, action) => {
      //   console.log("reducer==============================");
      //   console.log("current(state) =======> ", current(state));
      //   console.log("action.payload =======> ", action.payload);
      //   state.checkState = action.payload.checkState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncBankUpFetch.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncBankUpFetch.fulfilled, (state, action) => {
      const payload = action.payload;
      if (current(state.list).includes(payload)) {
        let idx = state.list.indexOf(payload);
        state.list.splice(idx, 1);
      } else {
        state.list = payload;
      }
      if (action.meta.arg.eventType) {
        state.eventType = action.meta.arg.eventType;
      }
      state.refresh = action.meta.arg.refresh;
      state.cur = action.meta.arg.cur;
      state.status = "complete";
    });
    builder.addCase(asyncBankUpFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});
export const { eventReducerClick } = eventReducer.actions;
export default eventReducer;

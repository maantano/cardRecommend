import { createSlice, current } from "@reduxjs/toolkit";
import { asyncUpFetchXlsx } from "../components/Xlsx/Summary3";

const xlsxTop3 = createSlice({
  name: "xlsxTop3Reducer",
  initialState: {
    list: [],
    status: "Start",
    cardType: "",
    top3BenefitResult: {},
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetchXlsx.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetchXlsx.fulfilled, (state, action) => {
      const payload = action.payload;
      if (current(state.list).includes(payload)) {
        let idx = state.list.indexOf(payload);
        state.list.splice(idx, 1);
      } else {
        state.list = payload;
      }
      if (action.meta.arg.cardType) {
        state.cardType = action.meta.arg.cardType;
      }
      state.cur = action.meta.arg.cur;
      state.refresh = action.meta.arg.refresh;
      state.checkedList = action.meta.arg.checkedList;
      state.status = "complete";
    });
    builder.addCase(asyncUpFetchXlsx.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default xlsxTop3;

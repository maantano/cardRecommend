import { createSlice, current } from "@reduxjs/toolkit";

import { asyncSearchFetch } from "../components/Search/Search1";

const search = createSlice({
  name: "searchReducer",
  initialState: {
    list: [],
    status: "Start",
    amount: [],
    prevRec: [],
    selectCard: [],
    type: "",
    bankList: [],
    listCate: [],
    checkBenefitList: [],
  },
  extraReducers: (builder) => {
    builder.addCase(asyncSearchFetch.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncSearchFetch.fulfilled, (state, action) => {
      const payload = action.payload;
      state.list = payload;
      state.cardCorp = action.meta.arg.cardCorp;
      state.status = "complete";
      state.prevRec = action.meta.arg.prevRec;
      state.selectCard = action.meta.arg.selectCard;
      state.type = action.meta.arg.type;
      state.bankList = action.meta.arg.bankList;
      state.amount = action.meta.arg.amount;
      state.listCate = action.meta.arg.listCate;
      state.checkBenefitList = action.meta.arg.checkBenefitList;
    });
    builder.addCase(asyncSearchFetch.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default search;

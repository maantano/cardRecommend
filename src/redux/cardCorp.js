import { createSlice, current } from "@reduxjs/toolkit";
import { asyncUpFetchCardCop } from "../router/pages/Main";

const cardCorp = createSlice({
  name: "cardCorpReducer",
  initialState: {
    list: [],
    status: "Start",
    cardType: "",
    benefitCount: "",
    refresh: false,
    cur: "",
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetchCardCop.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetchCardCop.fulfilled, (state, action) => {
      const payload = action.payload;
      console.log("payload =====>", payload);
      state.list = payload;
      state.status = "complete";
      state.prevRec = action.meta.arg.prevRec;
      state.corporationTarget = action.meta.arg.corporationTarget;
      state.selectCard = action.meta.arg.selectCard;
      state.type = action.meta.arg.type;
      state.bankList = action.meta.arg.bankList;
      state.amount = action.meta.arg.amount;
      state.listCate = action.meta.arg.listCate;
      state.checkBenefitList = action.meta.arg.checkBenefitList;
    });
    builder.addCase(asyncUpFetchCardCop.rejected, (state, action) => {
      state.status = "fail";
    });
  },
});

export default cardCorp;

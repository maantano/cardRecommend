import { createSlice, current } from "@reduxjs/toolkit";
import { asyncUpFetch2 } from "../components/About/Cont1";

const checkInitial = {
  done: [
    // {
    //   id: "",
    //   chk: false,
    // },
  ],
};
const CheckIsDone = createSlice({
  name: "checkReducer",
  initialState: { ...checkInitial, status: "Start" },
  reducers: {
    toggleDone: (state, action) => {
      const { id, chk } = action.payload;
      const existingItemIndex = state.done.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        // 이미 해당 id가 존재하면 해당 아이템을 제거
        state.done.splice(existingItemIndex, 1);
      } else {
        state.done.push({ id, chk });
      }
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase(asyncUpFetch2.pending, (state, action) => {
  //       state.status = "Loading";
  //     });
  //     builder.addCase(asyncUpFetch2.fulfilled, (state, action) => {
  //       console.log(state);
  //       console.log(action);
  //       //   const { id, chk } = action.payload;
  //       //   const existingItemIndex = state.done.findIndex((item) => item.id === id);
  //       //   if (existingItemIndex !== -1) {
  //       //     // 이미 해당 id가 존재하면 해당 아이템을 제거
  //       //     state.done.splice(existingItemIndex, 1);
  //       //   } else {
  //       //     state.done.push({ id, chk });
  //       //   }
  //       state.status = "complete";
  //     });
  //     builder.addCase(asyncUpFetch2.rejected, (state, action) => {
  //       state.status = "fail";
  //     });
  //   },
});
export const { toggleDone } = CheckIsDone.actions;
export default CheckIsDone;

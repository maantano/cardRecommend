// import filter from "./reducer";
// import CheckIsDone from "./reducer";

import { configureStore } from "@reduxjs/toolkit";
import filter from "./filter";
import CheckIsDone from "./checkReducer";
import AllCheck from "./allCheck";
import eventReducer from "./eventReducer";
import search from "./search";
import xlsxTop3 from "./xlsxTop3";
import cardCorp from "./cardCorp";

// import rootReducer from "./reducers"; // 앱의 루트 리듀서를 가져옵니다.

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: {
    filterReducer: filter.reducer,
    xlsxTop3Reducer: xlsxTop3.reducer,
    checkReducer: CheckIsDone.reducer,
    allCheckReducer: AllCheck.reducer,
    eventReducerReducer: eventReducer.reducer,
    searchReducer: search.reducer,
    cardCorpReducer: cardCorp.reducer,
  },
});
// console.log(store);

export default store;

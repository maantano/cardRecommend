import create from "zustand";

interface testDataInfo {
  //타입스크립트 사용 시 필요 (js라면 지우기)
  testData: String[];
  setTestData: (select: String[]) => void;
}

export const useStore = create<testDataInfo>((set) => ({
  testData: [],
  setTestData: (select) => {
    set((state) => ({ ...state, testData: select }));
  },
}));

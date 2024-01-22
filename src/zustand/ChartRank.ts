import create from "zustand";

interface ChartInfo {
  totalExpand?: number;
  categoryExpand?: String;
  totalRow?: String[];
  setTotal: (list: []) => void;
}

export const chartRankStore = create<ChartInfo>((set) => ({
  setTotal: (list) => {
    set((state) => ({ ...state.totalRow, totalRow: list }));
  },
}));

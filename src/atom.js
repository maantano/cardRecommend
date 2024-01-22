// import { atom } from "recoil";

// export const isDarkAtom = atom({
//   key: "atom",
//   default: true,
// });
// export interface IContentTypes {
//   name: string;
//   status: boolean;
//   message: string;
// }
// export const contentState = atom<IContentTypes>({
//   key: "content",
//   default: {
//     name: "test",
//     status: false,
//     message: "",
//   },
// });

// export interface clickTypes {
//   category: [];
// }

// export const categoryClick = atom<clickTypes>({
//   key: "categoryClick",
//   default: {
//     category: [],
//   },
// });

import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "atom",
  default: true,
});

export const contentState = atom({
  key: "content",
  default: {
    name: "test",
    status: false,
    message: "",
  },
});

export const categoryClick = atom({
  key: "categoryClick",
  default: {
    category: [],
  },
});

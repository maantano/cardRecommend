import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Search from "./pages/Search";
import Deatil from "./pages/Detail";

import Xlsx2 from "./pages/Xlsx2";
import ScrollTop from "./pages/ScrollTop";
import Main from "./pages/Main";
import Footer from "../components/Footer/Footer";
import Json_To_Firebase from "../components/Json_To_Firebase";
import ReadFirebase from "../components/ReadFirebase";
import UpdateFirebase from "../components/UpdateFirebase";

const Router = () => {
  // const cardNo = 500;
  // const refresh1 = useSelector((state) => state.filterReducer.refresh);

  // const refresh2 = useSelector((state) => state.eventReducerReducer.refresh);
  return (
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>
        {/* <Route path="/" element={<UpdateFirebase />} /> */}
        {/* <Route path="/" element={<RemoveFirebase />} /> */}
        <Route path="/" element={<Main />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/form" element={<Form />} /> */}
        <Route path="/search" element={<Search />} />
        <Route path={`/detail/:id`} element={<Deatil />} />
        {/* <Route path={`/xlsx`} element={<Xlsx />} /> */}
        <Route path={`/xlsx2`} element={<Xlsx2 />} />

        {/* <Route path={`/rankTest`} element={<RankTest />} /> */}
        {/* <Route path={`/card/detail/${cardNo}`} element={<Deatil />} /> */}
      </Routes>
      <Footer />
      {/* <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer> */}
    </BrowserRouter>
  );
};

export default Router;

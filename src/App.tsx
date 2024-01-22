import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "./App.css";
import { isDarkAtom } from "./atom";

import Router from "./router/Router";
import { darkTheme, lightTheme } from "./theme";
// import { firebaseApp, firestore } from "./firebase";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  const queryclient = new QueryClient();
  // const client = new ApolloClient({
  //   uri: "ec2-3-38-115-252.ap-northeast-2.compute.amazonaws.com:8001",
  //   cache: new InMemoryCache(),
  // });

  // useEffect(() => {
  //   console.log(firebaseApp);
  //   console.log(firestore);
  // });

  return (
    <>
      {/* <ApolloProvider client={client}> */}
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <QueryClientProvider client={queryclient}>
          <Router />
        </QueryClientProvider>
      </ThemeProvider>
      {/* </ApolloProvider> */}
    </>
  );
}

export default App;

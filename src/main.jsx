import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import Header from "./shared/Header";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);

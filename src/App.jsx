import React from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalFonts } from "./assets/styles/fonts";
import { GlobalStyle } from "./assets/styles/cssReset";

import Page1 from "./pages/Page1";
import Home from "./Home";
import "./Library.scss";

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </>
  );
}

export default App;

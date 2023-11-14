import React from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalFonts } from "./assets/styles/fonts";
import { GlobalResetStyle } from "./assets/styles/cssReset";

import OtherPage from "./pages/OtherPage";
import Home from "./Home";
import "./Library.scss";

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalResetStyle />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/otherPage" element={<OtherPage />} />
      </Routes>
    </>
  );
}

export default App;

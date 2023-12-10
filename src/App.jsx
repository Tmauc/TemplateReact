import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

import { GlobalFonts } from "./assets/styles/fonts";
import { GlobalResetStyle } from "./assets/styles/cssReset";

import OtherPage from "./pages/OtherPage";
import Home from "./Home";
import "./Library.scss";

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = useLenis(() => {
    ScrollTrigger.update();
  });
  const lenisRef = useRef(lenis);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <>
      <GlobalFonts />
      <GlobalResetStyle />
      <ReactLenis ref={lenisRef} autoRaf={false} root>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/otherPage" element={<OtherPage />} />
        </Routes>
      </ReactLenis>
    </>
  );
}

export default App;

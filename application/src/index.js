import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";

// pages
import Resume from './resume';
import GitHub from './github';
import Msnscript from './msnscript/Msnscript';
import Donations from './chakra/pages/Donations';
import Services from './chakra/pages/Services';

// msn2 pages
import Msn2docs from "./msn2/msn2docs";
import Basics from "./msn2/docs/basics";
import Systemcalls from "./msn2/docs/systemcalls";
import Threads from "./msn2/docs/threads";
import Examples from "./msn2/docs/examples";
import Systemclasses from "./msn2/docs/systemclasses";
import Automation from "./msn2/docs/automation";

// testing Chakra
import ChakraApp from "./chakra/App";
import { ColorModeScript } from "@chakra-ui/react";

// initial color mode
import theme from "./theme";

// for fading in
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <HashRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<ChakraApp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/github" element={<GitHub />} />
          <Route path="/msnscript1" element={<Msnscript />} />
          <Route path="/msn2docs" element={<Msn2docs />} />
          <Route path="/msn2basics" element={<Basics />} />
          <Route path="/msn2systemcalls" element={<Systemcalls />} />
          <Route path="/msn2threads" element={<Threads />} />
          <Route path="/msn2systemclasses" element={<Systemclasses />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/msn2examples" element={<Examples />} />
          <Route path="/msn2auto" element={<Automation />} />
        </Routes>
      </Wrapper>
    </HashRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

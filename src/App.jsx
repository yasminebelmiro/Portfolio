import React from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";

import { GlobalContainer } from "./global";
import About from "./pages/About/About";
import Projects from "./pages/Projects/projects";
import Cv from "./pages/Cv/Cv";
import Contacts from "./pages/Contacts/Contacts";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <GlobalContainer>
        <Home />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/curriculo" element={<Cv />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/contatos" element={<Contacts />} />
        </Routes>
      </GlobalContainer>
    </BrowserRouter>
  );
};

export default App;

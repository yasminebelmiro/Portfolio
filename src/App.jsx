import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Cv from "./pages/Cv/cv";
import Projects from "./pages/Projects/projects";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Header from "./components/Header/Header";
import { GlobalContainer } from "./global";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Outlet />
      <GlobalContainer>
        <Home />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/curriculo" element={<Cv />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/projetos/aplicacoes/" element={<Projects />} />
          <Route path="/projetos/protitipagem/" element={<Projects />} />
          <Route path="/contatos" element={<Contacts />} />
        </Routes>
      </GlobalContainer>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import About from "./pages/About/about";
import Cv from "./pages/Cv/cv";
import Projects from "./pages/Projects/projects";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { GlobalContainer } from "./global";
import Contacts from "./pages/Contacts/Contacts";

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

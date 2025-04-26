"use client";

import { useState } from "react";
import Adm from "./components/adm";
import Contato from "./components/contato";
import Faq from "./components/faq";
import Home from "./components/home";
import Juntese from "./components/juntese";
import Navbar from "./components/navbar";
import Patrocinio from "./components/patrocinio"; // Corrigir o nome do componente
import Servidores from "./components/servidores";
import Sobre from "./components/sobre";
import ScrollWrapper from "./components/ScrollWrapper";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="modal-root"></div> {/* Contêiner para os modais */}
      <div className="interactive">
        <Navbar />
      </div>
      <ScrollWrapper isModalOpen={isModalOpen}>
        <Home />
        <Sobre />
        <Juntese />
        <Servidores setIsModalOpen={setIsModalOpen} />
        <Faq />
        <Adm setIsModalOpen={setIsModalOpen} />
        <Patrocinio setIsModalOpen={setIsModalOpen} /> {/* Corrigir o nome do componente */}
        <Contato />
      </ScrollWrapper>
    </>
  );
}

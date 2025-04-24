import Adm from "./components/adm";
import Faq from "./components/faq";
import Home from "./components/home";
import Juntese from "./components/juntese";
import Navbar from "./components/navbar";
import Patrocinios from "./components/patrocinios";
import Servidores from "./components/servidores";
import Sobre from "./components/sobre";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
      <Juntese />
      <Servidores />
      <Faq />
      <Adm />
      <Patrocinios />
    </>
  );
}

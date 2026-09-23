import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projetos } from "./pages/Projetos";
import { Sobre } from "./pages/Sobre";
import { Curriculo } from "./pages/Curriculo";
import { Contato } from "./pages/Contato";

// Sem isso, trocar de rota mantém o scroll da página anterior e o visitante cai
// no meio do conteúdo, sem título.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// HashRouter: rotas via # (ex: /#/cv). Funciona em host estático (GitHub Pages,
// VPS) sem precisar de fallback 404 nem reescrita de servidor.
export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projetos" element={<Projetos />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="cv" element={<Curriculo />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

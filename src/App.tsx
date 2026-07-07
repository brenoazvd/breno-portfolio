import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Projetos } from "./pages/Projetos";
import { Sobre } from "./pages/Sobre";
import { Curriculo } from "./pages/Curriculo";
import { Contato } from "./pages/Contato";

// HashRouter: rotas via # (ex: /#/cv). Funciona em host estático (GitHub Pages,
// VPS) sem precisar de fallback 404 nem reescrita de servidor.
export default function App() {
  return (
    <HashRouter>
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

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "components/Menu";
import Rodape from "components/Rodape";
import DefaultPage from "components/DefaultPage";
import Feedback from "pages/Newsletter";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      
        <Menu />
        <Routes>

          <Route path="/" element={<DefaultPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Newsletter" element={<Feedback />} />
          </Route>

          <Route path="*" element={<div>Erro 404 - Página não encontrada</div>} />
        </Routes>
        <Rodape />

      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
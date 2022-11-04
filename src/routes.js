import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Episodios from "./pages/Episodios";
import Menu from "components/Menu";
import Rodape from "components/Rodape";
import DefaultPage from "components/DefaultPage";
import Feedback from "pages/Feedback";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      
        <Menu />
        <Routes>

          <Route path="/" element={<DefaultPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/Episodios" element={<Episodios />} />
            <Route path="/feedback" element={<Feedback />} />
          </Route>

          <Route path="*" element={<div>Erro 404 - Página não encontrada</div>} />
        </Routes>
        <Rodape />

      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
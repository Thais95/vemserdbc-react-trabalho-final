import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Episodios from "./pages/Episodios";
import Menu from "components/Menu";
import Rodape from "components/Rodape";
import DefaultPage from "components/DefaultPage";
import Newsletter from "pages/Newsletter";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<DefaultPage/>}>
            <Route path="/" element={<Home />} />
            <Route path="/Episodios" element={<Episodios />} />
            <Route path="/Newsletter" element={<Newsletter/>} />
          </Route>

          <Route path="*" element={<div>Erro 404 - Página dasdsadsadsadds encontrada</div>} />
          
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
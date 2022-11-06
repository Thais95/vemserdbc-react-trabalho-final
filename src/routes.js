import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Episodios from "./pages/Episodios";
import DefaultPage from "components/DefaultPage";
import Newsletter from "pages/Newsletter";
import Erro from "components/Erro"; 
import Music from "pages/Music";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<DefaultPage/>}>
            <Route path="/" element={<Home />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="/trilha-sonora" element={<Music /> } />
            <Route path="/newsletter" element={<Newsletter/>} />
          </Route>

          <Route path="*" element={<Erro/>} />
          
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
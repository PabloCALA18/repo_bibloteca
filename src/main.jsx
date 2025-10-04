import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Inicio from "./Inicio";
import Pelicula from "./Pelicula";
import DetallePelicula from "./DetalleDePelicula";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Inicio />}>
         <Route path="peliculas/all" element={<Pelicula />} />
         <Route path="peliculas/:id" element={<DetallePelicula />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

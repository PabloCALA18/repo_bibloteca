import { useParams, useOutletContext } from "react-router-dom";

export default function DetallePelicula() {
   const { id } = useParams();
   const { peliculas } = useOutletContext();

  const pelicula = peliculas.find((p) => p.id === parseInt(id));

  if (!pelicula) return <h2>Película no encontrada</h2>;

  return (
    <div>
     <h2>{pelicula.titulo}</h2>
        <p><b>Director:</b> {pelicula.director}</p>
        <p><b>Año:</b> {pelicula.año}</p>
       <p>{pelicula.descripcion}</p>
    </div>
  );
}

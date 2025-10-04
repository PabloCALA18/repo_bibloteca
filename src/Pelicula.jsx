import { Link, useOutletContext } from "react-router-dom";

export default function Pelicula() {
  const { peliculas } = useOutletContext();

  return (
    <>
      <h2>Lista de Películas</h2>
      <ul>
        {peliculas.map((peli) => (
          <li key={peli.id}>
            <Link to={`/peliculas/${peli.id}`}>
              {peli.titulo}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

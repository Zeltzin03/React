import style from "./styles/pelicula-style.module.css";

export default function OwnerPelicula({ peliculaObject, onDelete }) {
  return (
    <li className={style.pelicula}>
      <div className={style.peliculaNombre}>{peliculaObject.name}</div>
      <button
        className={style.botonEliminar}
        onClick={() => onDelete(peliculaObject.name)}
      >
        Eliminar
      </button>
    </li>
  );
}

import style from "./styles/pelicula-style.module.css";

export default function OwnerPelicula({ peliculaObject, onDelete }) {
  return (
    <li className={style.pelicula}>
      <div>
        <h3>{peliculaObject.name}</h3>
        <button onClick={() => onDelete(peliculaObject.name)}>
          Eliminar 🎬
        </button>
      </div>
    </li>
  );
}

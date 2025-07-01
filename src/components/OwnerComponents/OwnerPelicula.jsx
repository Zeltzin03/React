import style from "./styles/pelicula-style.module.css";//importo el archivo

export default function OwnerPelicula({ peliculaObject, onDelete }) {//tiene 2 propiedades: las peliculas y la función para borrar
  return (//retorna la lista de peliculas y tiene estilos para cada una
    <li className={style.pelicula}>
      <div className={style.peliculaNombre}>{peliculaObject.name}</div>
      <button //botón con estilo para eliminar
        className={style.botonEliminar}
        onClick={() => onDelete(peliculaObject.name)}
      >
        Eliminar
      </button>
    </li>
  );
}

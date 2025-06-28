import OwnerPelicula from "../components/OwnerComponents/OwnerPelicula";
import { useState, useEffect } from "react";
import OwnerHeader from "../components/OwnerComponents/OwnerHeader";
import OwnerFooter from "../components/OwnerComponents/OwnerFooter";

export default function Owner() {
  // Lista inicial
  // Estado
  const [peliculas, setPeliculas] = useState([
    {
    name: "Amélie",
  },
   {
    name: "Bridget Jones",
  },
  {
    name: "El viaje de Chihiro",
  },
  {
    name: "Como si fuera la primera vez",
  },
  {
    name: "3 idiotas",
  },
  {
    name: "Jhon Wick",
  },
  {
    name: "Interestelar",
  },
  {
    name: "Batman: El caballero de la noche asciende",
  },
  {
    name: "Tenet",
  },
  {
    name: "La La Land: ciudad de sueños",
  },
  {
    name: "La propuesta",
  },
  {
    name: "El silencio de los corderos",
  },
  ]);//fin del estado

  // Al iniciar, cargamos desde localStorage o usamos la lista inicial
  useEffect(() => {
    const data = localStorage.getItem("peliculas");
    if (data) setPeliculas(JSON.parse(data));
    },[])

  // Guardar en localStorage cada vez que cambie la lista
  useEffect(() => localStorage.setItem("peliculas", JSON.stringify(peliculas)), [peliculas]);

  // Eliminar una película
  const deletePelicula = (nombre) => setPeliculas(prev => prev.filter((pelicula) => pelicula.name !== nombre));
  console.log(peliculas);

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "30px",
      borderRadius: "20px",
      backgroundColor: "#fff5f2",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      border: "1px solid #ffddd6"
    },
    imgContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px"
    },
    img: {
      width: "200px",
      height: "200px",
      borderRadius: "10px",
      objectFit: "cover",
      border: "5px solid #efb0a9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    },
    name: {
      fontSize: "1.5rem",
      color: "#333",
      fontWeight: "600",
      textAlign: "center",
      margin: "10px 0 5px 0"
    },
    role: {
      fontSize: "1.2rem",
      color: "#e67e76",
      textAlign: "center",
      fontWeight: "600",
      marginBottom: "20px"
    },
    bio: {
      fontSize: "1.1rem",
      color: "#555",
      lineHeight: "1.8",
      textAlign: "left",
      padding: "0 15px",
      marginBottom: "30px"
    },
    peliculasTitulo: {
      textAlign: "center",
      fontSize: "1.3rem",
      marginTop: "30px",
      marginBottom: "15px",
      color: "#e67e76",
      fontWeight: "600"
    },
    ul: {
      listStyle: "none",
      padding: 0,
      marginTop: "10px"
    },
    li: {
      fontSize: "1.1rem",
      color: "#e67e76",
      marginBottom: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    button: {
      backgroundColor: "#efb0a9",
      border: "none",
      borderRadius: "5px",
      padding: "4px 10px",
      color: "#fff",
      cursor: "pointer"
    }
  };

  return (
    <>
      <OwnerHeader />
      <div style={styles.container}>
        <div style={styles.imgContainer}>
          <img src="/avatar2.jpg" alt="Mi avatar" style={styles.img} />
        </div>

        <h2 style={styles.name}>Zeltzin Nataly Rivero Romo</h2>
        <p style={styles.role}>Desarrolladora Java FullStack</p>
        <p style={styles.bio}>
          ¡Hola! 😊<br /><br />
          Soy Ingeniera Agrónoma y me estoy formando como Desarrolladora. Aunque mi camino empezó en el campo, hoy estoy súper emocionada de estar metida en el mundo tech. Gracias a mi carrera he desarrollado habilidades como el pensamiento crítico, resolver problemas con creatividad y trabajar bien en equipo, y ahora las estoy aplicando en el desarrollo web y bases de datos.<br /><br />
          Disfruto trabajar en equipo, aprender de los demás y compartir lo que sé. Me gusta aportar con buena actitud y compromiso, y sobre todo, seguir construyendo un perfil que combine lo técnico con lo humano. 💻🌱
        </p>

        <h3 style={styles.peliculasTitulo}>🎞️ Mis películas favoritas</h3>

        <ul style={styles.ul}>{peliculas.map((peli, index) => ( <OwnerPelicula
            key={index}
            peliculaObject={peli}
            onDelete={deletePelicula}
        />
        ))}   
        </ul>
      </div>
      <OwnerFooter />
    </>
  );
}

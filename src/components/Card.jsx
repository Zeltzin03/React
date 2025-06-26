/*
 * Componente card debe tener
*1. imagen
*2. una parte con texto donde va a ir su nombre
*3. 2 links, uno a github y uno a linkedin
*4. un objeto por elemento a darle estilos
 */
export default function Card() {
  const img = {
    width: "150px",
    height: "150px",
    borderRadius: "10px",
    display: "block",
    margin: "0 auto",
  };

  const p = {
    fontSize: "32px",
    color: "#9dd5ff",
    textTransform: "uppercase"
  }

  const ul = {
    textDecoration: "none",
    listStyle: "none",
    display: "flex",
    justifyContent: "space-evenly",
    margin: 0,
    padding: 0
  }

  const a = {
  color: "#fff",
  backgroundColor: "#0077b5",  // azul LinkedIn
  padding: "8px 12px",
  textDecoration: "none",
  fontWeight: "bold",
  borderRadius: "5px"
};

  const container ={
    padding: "40px",
    border: "2px solid white"
  }

  return (
    <div style={container}>
      <img src="/pizza.jpg" alt="Pizza cangrejo" style={img} />
      <p style={p}>Zeltzin Nataly</p>
      <ul style={ul}>
        <li><a href="https://github.com/Zeltzin03" style={a}>Github</a></li>
        <li><a href="https://www.linkedin.com/in/zeltzin-nataly-rivero-romo-1461b21b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app " style={a}>Linkedin</a></li>
      </ul>
    </div>
  );




}

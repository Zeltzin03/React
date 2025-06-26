export default function Header(){
//creando objeto de estilos para el componente
    const headerStyle = {
    color: "#edc84b",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "4.2rem",
    fontWeight: 300,
    letterSpacing: "3px",
    position: "relative",
    width: "100%",
    display: "block",
    }

    return (
        <header>
            <h1 style ={headerStyle}>La Pizza de Don Cangrejo</h1>
        </header>
    )
}
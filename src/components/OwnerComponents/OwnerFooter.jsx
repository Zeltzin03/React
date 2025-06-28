import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function OwnerFooter() {
  const footerStyle = {
    backgroundColor: "#ffe6db",
    padding: "20px",
    textAlign: "center",
    borderTop: "2px solid #efb0a9",
    marginTop: "40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const iconStyle = {
    fontSize: "1.8rem",
    margin: "0 15px",
    color: "#bda0a2",
    transition: "color 0.3s ease"
  };

  return (
    <footer style={footerStyle}>
      <p style={{ marginBottom: "10px", color: "#e67e76", fontWeight: "600", fontSize: "1.1rem"}}>
        ¡Contáctame!
      </p>
      <div>
        <a
          href="https://github.com/Zeltzin03"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <FaGithub style={iconStyle} />
        </a>

        <a
          href="https://www.linkedin.com/in/zeltzin-nataly-rivero-romo-1461b21b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <FaLinkedin style={iconStyle} />
        </a>

        <a
          href="mailto:zeltzinromo@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <FaEnvelope style={iconStyle} />
        </a>
      </div>
    </footer>
  );
}

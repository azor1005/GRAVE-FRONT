import logo from "../../images/gave-logo.png";
import "./Navbar.css"

export function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search-space" >
          <i className="bi bi-search"></i>
          <input type="Text" />
        </div>
        <img src={logo} alt="Logo Gave" />
        <button>Entrar</button>
      </nav>
    </>
  );
}

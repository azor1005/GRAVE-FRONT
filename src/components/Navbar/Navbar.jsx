import logo from "../../images/gave-logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const [buttonExit, setButtonExit] = useState(false);
  const onClickLogin = (event) => {
    navigate(`/Login`);
  };
  const onClickRegister = (event) => {
    navigate(`/Register`);
  };
  const onClickGame = (event) => {
    navigate(`/Register/Game`);
  };
  const onClickSair = (event) => {
    localStorage.removeItem("token");
    navigate(`/`);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setButtonExit(true);
    } else {
      setButtonExit(false);
    }
  }, []);
  return (
    <>
      <nav>
        <img src={logo} alt="Logo Gave" />
        {localStorage.getItem("token") ? (
          <div >
            <button style={{marginRight: "20px"}} onClick={onClickGame}>Registrar Jogo</button>
            <button onClick={onClickSair}>Sair</button>
          </div>
        ) : (
          <>
            <button onClick={onClickRegister}>Registrar</button>
            <button onClick={onClickLogin}>Entrar</button>
          </>
        )}
      </nav>
    </>
  );
}

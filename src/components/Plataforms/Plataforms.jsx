import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Plataforms.css";
import axios from "axios";
import { useState } from "react";

export function PlataformsCard() {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const onClick = (event) => {
    navigate(`/plataform/${event.target.id}`);
  };
  const getAllGames= async () => {
    try {
      navigate(`/AllGames`)
    } catch (error) {
      
    }
  }

  return (
    <>
      <div style={{textAlign: "center"}} >
        <button onClick={getAllGames} style={{marginTop: "100px"}}> Ver todos os jogos</button>
        <div className="plataforms-grid">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              id="PC"
              className="plataforms-images"
              variant="top"
              src="https://www.betaarchive.com/wiki/images/9/94/Pc-logo-png.png"
              onClick={onClick}
            />
            <Card.Body></Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              id="Xbox"
              className="plataforms-images"
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/2048px-Xbox_one_logo.svg.png"
              onClick={onClick}
            />
            <Card.Body></Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              id="Playstation"
              className="plataforms-images"
              variant="top"
              src="https://s7test3.scene7.com/is/image/SIEPDC/playstation-family-logo?$native$"
              onClick={onClick}
            />
            <Card.Body></Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              id="Switch"
              className="plataforms-images"
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/3/38/Nintendo_switch_logo.png"
              onClick={onClick}
            />
            <Card.Body></Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

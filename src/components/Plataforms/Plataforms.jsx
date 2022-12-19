import Button from "react-bootstrap/Button";
import logopc from "../../images/plataform-pc.png"
import logoxbox from "../../images/plataform-xbox.png"
import logoplaystation from "../../images/plataform-playstation.png"
import logoswitch from "../../images/plataform-switch.png"
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
              src={logopc}
              onClick={onClick}
            />
            <Card.Body></Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              id="Xbox"
              className="plataforms-images"
              variant="top"
              src={logoxbox}
              onClick={onClick}
            />
            <Card.Body></Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              id="Playstation"
              className="plataforms-images"
              variant="top"
              src={logoplaystation}
              onClick={onClick}
            />
            <Card.Body></Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              id="Switch"
              className="plataforms-images"
              variant="top"
              src={logoswitch}
              onClick={onClick}
            />
            <Card.Body></Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

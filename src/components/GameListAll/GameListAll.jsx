import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./GameListAll.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function GameListAll() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/game`
      );
      setData(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  const onClick = (event) => {
    console.log(event.target.id);
    navigate(`/game/${event.target.id}`);
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className="game-list-grid">
        {data.map((value) => {
          return (
            <Card key={value.id} className="card-game">
              <Card.Img
                id={value.id}
                onClick={onClick}
                className="image-game"
                variant="top"
                src={value.image}
              />
              <Card.Body className="body-game">
                <Card.Title className="title-game">{value.name}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted score-game">
                  Score: {value.score}
                </small>
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

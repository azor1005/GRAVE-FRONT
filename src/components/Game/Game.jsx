import Card from "react-bootstrap/Card";
import "./Game.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Game() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/game/${window.location.href.split("/").pop()}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const onClick = (event) => {
    console.log(event.target);
    navigate(`/Game/CreateReview/${data._id}`);
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <>
      <div className="div-info-game">
        <div className="card-info">
          <div className="row">
            <h1 className="game-title">{data.name}</h1>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "93%",
            }}
          >
            <div className="div-1">
              <img className="img-style" src={data.image} />
              <p className="text-muted">Score: {data.score}</p>
              <button onClick={onClick} >Criar Review</button>
            </div>
            <div className="game-description">
              <p>{data.resume}</p>
              <div>
                <p>Desenvolvedor: {data.developed}</p>
                <p>
                  Plataforma:
                  {data.plataform
                    ? data.plataform.map((value) => <span> - {value} </span>)
                    : ""}
                </p>
                {console.log(data.plataform)}
              </div>
            </div>
          </div>
        </div>
        {data.reviews
          ? data.reviews.map((value) => {
              return (
                <div className="div-review-game game-description">
                  <div>
                    <h1>Usuario:{value.userName}</h1>
                    <p>Texto:{value.text}</p>
                  </div>
                  <p>score:{value.score}</p>
                </div>
              );
            })
          : "Não há review"}
      </div>
    </>
  );
}

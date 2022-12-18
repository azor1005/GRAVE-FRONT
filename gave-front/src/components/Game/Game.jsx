import Card from "react-bootstrap/Card";
import "./Game.css";

export function Game() {
  return (
    <>
      <div className="div-info-game">
        <div className="card-info">
          <div className="row">
            <h1 className="game-title">Título do jogo</h1>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "93%",
            }}
          >
            <div className="div-1">
              <img
                className="img-style"
                src="https://image.api.playstation.com/vulcan/ap/rnd/202006/0821/BslGKgFzwgNgHGD1YiXr5kOf.png"
              />
              <p className="text-muted">Score: 10</p>
            </div>
            <div className="game-description">
              <p>Descrição do jogo:</p>
              <div>
                <p>Desenvolvedor:</p>
                <p>Plataforma:</p>
              </div>
            </div>
          </div>
        </div>

        <div className="div-review-game game-description">
            <div>
              <h1>Nome do usuario</h1>
              <p>Texto:</p>
            </div>
            <p>score:</p>
        </div>
        
      </div>
    </>
  );
}

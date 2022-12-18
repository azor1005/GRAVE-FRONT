import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./GamesList.css"

export function GameList() {
  return (
    <div className='game-list-grid'>
      <Card className='card-game'>
        <Card.Img className="image-game" variant="top" src="https://img.olx.com.br/thumbs256x256/27/273267343216489.jpg" />
        <Card.Body className="body-game">
          <Card.Title className="title-game">Título do jogo</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted score-game">Score: 10</small>
        </Card.Footer>
      </Card >

      <Card className='card-game'>
        <Card.Img className="image-game" variant="top" src="https://image.api.playstation.com/vulcan/ap/rnd/202006/0821/BslGKgFzwgNgHGD1YiXr5kOf.png" />
        <Card.Body className="body-game">
          <Card.Title className="title-game">Título do jogo</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted score-game"  >Score: 10</small>
        </Card.Footer>
      </Card>

      <Card className='card-game'>
        <Card.Img className="image-game" variant="top" src="https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png" />
        <Card.Body className="body-game">
          <Card.Title className="title-game">Título do jogo</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted score-game">Score: 10</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

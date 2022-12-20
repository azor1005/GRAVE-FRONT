import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./GameListAll.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export function GameListAll() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [dataSearch, setDataSearch] = useState([]);

  const handleData = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/game/filter`, {
        filter: "",
      });
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDataSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/game/search`);
      setDataSearch(response.data.finalResult);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDataFiltered = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/game/filter`, {
        filter,
      });
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  const onClick = (event) => {
    console.log(event.target.id);
    navigate(`/game/${event.target.id}`);
  };
  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  useEffect(() => {
    handleData();
    handleDataSearch();
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {console.log(dataSearch)}
      <Autocomplete
        className="autocompleteGame"
        value={filter}
        inputValue={filter}
        onInputChange={(event, newInputValue) => {
          setFilter(
            !(newInputValue.trim().length === 0)
              ? newInputValue
              : newInputValue.trim(),
          );
        }}
        id="controllable-states-demo"
        options={dataSearch || []} 
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Nome, genêro ou desenvolvedora" />}
      />

      <button style={{ marginTop: "9px", zIndex: "100" }} onClick={handleDataFiltered}>
        Pesquisar
      </button>
      <div className="game-list-grid">
        {data.map((value) => {
          return (
            <Card key={value._id} className="card-game">
              <Card.Img
                id={value._id}
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

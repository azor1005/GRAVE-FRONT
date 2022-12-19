import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateGame.css"

export function CreateGame() {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    name: "",
    resume: "",
    developed: "",
    image: "",
    genre: "",
    plataform: [],
  });
  const [checkbox, setCheckbox] = useState({
    PC: false,
    Xbox: false,
    Playstation: false,
    Switch: false,
  });
  const onChangeCheckbox = (data, e) => {
    console.log(e.target);
    if (data === "PC") {
      setCheckbox({
        ...checkbox,
        PC: !checkbox.PC,
      });
    }
    if (data === "Playstation") {
      setCheckbox({
        ...checkbox,
        Playstation: !checkbox.Playstation,
      });
    }
    if (data === "Xbox") {
      setCheckbox({
        ...checkbox,
        Xbox: !checkbox.Xbox,
      });
    }
    if (data === "Switch") {
      setCheckbox({
        ...checkbox,
        Switch: !checkbox.Switch,
      });
    }
  };
  useEffect(() => {
    const list = Object.keys(checkbox).filter((value) => {
      return checkbox[value];
    });
  }, [checkbox]);
  const onChange = (e) => {
    const name = e.target.name;
    setPayload({
      ...payload,
      [name]: e.target.value,
    });
  };
  const sendData = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const plataform = Object.keys(checkbox).filter((value) => {
        return checkbox[value];
      });
      const newPayload = {
        ...payload,
        plataform,
      };
      console.log(newPayload);
      const response = await axios.post(
        "http://localhost:3000/game",
        newPayload,
        config
      );
      if (response.status === 201) {
        navigate(`/`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h2>Criar Jogo</h2>
      <input
      className="nameCreateGame"
        onChange={onChange}
        name="name"
        value={payload.name}
        placeholder="Titulo"
        type="text"
        style={{ marginBottom: "20px" }}
      />
      <input
      className="developedCreateGame"
        onChange={onChange}
        name="developed"
        value={payload.developed}
        placeholder="Desenvolvedora"
        type="text"
        style={{ marginBottom: "20px" }}
      />
      <select className="selectCreateGame" name="genre" value={payload.genre} onChange={onChange} required>
        <option value="Aventura"> Aventura </option>
        <option value="Ação"> Ação </option>
        <option value="Estratégia"> Estratégia </option>
        <option value="RPG"> RPG </option>
        <option value="Esporte"> Esporte </option>
        <option value="Simulação"> Simulação </option>
      </select>
      <div>
        <input
          value={checkbox.PC}
          onChange={(e) => onChangeCheckbox("PC", e)}
          type="checkbox"
        />
        <label> PC</label>
      </div>
      <div>
        <input
          value={checkbox.Playstation}
          onChange={(e) => onChangeCheckbox("Playstation", e)}
          type="checkbox"
        />
        <label> Playstation</label>
      </div>
      <div>
        <input
          value={checkbox.Xbox}
          onChange={(e) => onChangeCheckbox("Xbox", e)}
          type="checkbox"
        />
        <label> Xbox</label>
      </div>
      <div>
        <input
          value={checkbox.Switch}
          onChange={(e) => onChangeCheckbox("Switch", e)}
          type="checkbox"
        />
        <label> Switch</label>
      </div>

      <textarea
        onChange={onChange}
        name="resume"
        value={payload.resume}
        placeholder="Descrição do jogo"
        style={{ width: "400px", height: "200px", marginBottom: "20px" }}
      ></textarea>
      <input
      className="imageCreateGame"
        onChange={onChange}
        name="image"
        value={payload.image}
        placeholder="Link da imagem"
        type="text"
        style={{ marginBottom: "20px" }}
      />
      <button onClick={sendData}>Enviar</button>
    </div>
  );
}

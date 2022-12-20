import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function CreateReview() {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    text: "",
    score: 0,
  });
  const [data, setData] = useState("");
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
      const newPayload = {
        ...payload,
        score: parseInt(payload.score),
      };
      console.log(newPayload);
      const response = await axios.put(
        `${import.meta.env.LINK}/game/review/${window.location.href
          .split("/")
          .pop()}`,
        newPayload,
        config
      );
      setData(response.data);
      navigate(`/game/${window.location.href.split("/").pop()}`);
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
      <h2>Criar Review</h2>
      <textarea
        name="text"
        onChange={onChange}
        placeholder="Digite seu review aqui"
        style={{ width: "400px", height: "200px", marginBottom: "20px" }}
      ></textarea>
      <input
        onChange={onChange}
        name="score"
        placeholder="0/10"
        min="0"
        max="10"
        type="number"
        style={{ marginBottom: "20px", width: "50px" }}
      />
      <button onClick={sendData}>Enviar</button>
    </div>
  );
}

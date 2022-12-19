import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateUser.css"

export function CreateUser() {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    const name = e.target.name;

    setPayload({
      ...payload,
      [name]: e.target.value,
    });
  };
  const sendData = async () => {
    try {
      
      const response = await axios.post("http://localhost:3000/user", payload);
      if (response.status === 201) {
        navigate(`/Login`);
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
      <h2 >Criar Usuario</h2>
      <input
        onChange={onChange}
        className="inputName"
        name="name"
        value={payload.name}
        placeholder="Nome"
        type="text"
        style={{ marginBottom: "20px" }}
      />
      <input
        onChange={onChange}
        className="inputEmail"
        name="email"
        value={payload.email}
        placeholder="Email"
        type="email"
        style={{ marginBottom: "20px" }}
      />
      <input
        onChange={onChange}
        className="inputPassword"
        name="password"
        value={payload.password}
        placeholder="Password"
        type="password"
        style={{ marginBottom: "20px" }}
      />
      <button onClick={sendData}>Enviar</button>
    </div>
  );
}

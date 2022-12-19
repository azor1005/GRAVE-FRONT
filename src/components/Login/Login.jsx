import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
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
      const response = await axios.post("http://localhost:3000/auth", payload);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate(`/`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onClickHome = (e) =>{
    navigate(`/`)
  }

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
      <h2>Login do usuario</h2>
      <input
        onChange={onChange}
        name="email"
        placeholder="Email"
        type="email"
        style={{ marginBottom: "20px" }}
      />
      <input
        onChange={onChange}
        name="password"
        placeholder="Password"
        type="password"
        style={{ marginBottom: "20px" }}
      />
      <button onClick={sendData}>Logar</button>
      <button style={{marginTop: "10px"}} onClick={onClickHome}>Voltar para home</button>
    </div>
  );
}
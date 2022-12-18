export function CreateGame() {
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
      <input placeholder="Titulo" type="text" style={{ marginBottom: "20px" }} />
      <input placeholder="Desenvolvedora" type="text" style={{ marginBottom: "20px" }} />
      <input placeholder="Genero" type="text" style={{ marginBottom: "20px" }} />
      <textarea
        placeholder="Digite seu review aqui"
        style={{ width: "400px", height: "200px", marginBottom: "20px" }}
      ></textarea>
      <input
        placeholder="0/10"
        min="0"
        max="10"
        type="number"
        style={{ marginBottom: "20px", width: "50px" }}
      />
      <button>Enviar</button>
    </div>
  );
}

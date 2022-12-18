export function CreateUser() {
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
        <h2>Criar Usuario</h2>
        <input
          placeholder="Nome"
          type="text"
          style={{ marginBottom: "20px" }}
        />
        <input
          placeholder="Email"
          type="email"
          style={{ marginBottom: "20px" }}
        />
        <input
          placeholder="Password"
          type="password"
          style={{ marginBottom: "20px" }}
        />
        <button>Enviar</button>
      </div>
    );
  }
export function Login (){
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
          placeholder="Email"
          type="email"
          style={{ marginBottom: "20px" }}
        />
        <input
          placeholder="Password"
          type="password"
          style={{ marginBottom: "20px" }}
        />
        <button>Logar</button>
      </div>
    )

}
import React, { useContext, useState } from "react";
import userContext from "../Context/userContext";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { setuser } = useContext(userContext);

  function handleSubmit(event) {
    event.preventDefault();
    setuser({ Username, Password });
  }

  return (
    <div>
      <input
        type="text"
        value={Username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={Password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;

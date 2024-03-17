import { FormEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const SigninPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      if (
        (username || username.length > 0) &&
        (password || password.length > 0)
      ) {
        const userData = { username: username, password: password };
        login(userData);
        Navigate("/home");
      } else {
        alert("Usuário ou senha inválido.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="">Signin</h1>
        <div className="w-150">
          <input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;

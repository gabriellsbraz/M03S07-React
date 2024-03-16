import { useState } from "react";

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1 className="">SignupPage</h1>
      <form action="submit">
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
          <button>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;

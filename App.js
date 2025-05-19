import { useState } from "react";
import Login from "./screens/Login";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Login user={user} setUser={setUser} />
    </>
  );
}

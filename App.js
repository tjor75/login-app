import { useState } from "react";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <LoginScreen user={user} setUser={setUser} />
    </>
  );
}

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Login from "./Login";
import Game from "../Components/Game";

function Home() {
  const { user } = useAuth();

  return (
    <div className="w-max h-max my-auto mx-auto">
      <button className="primary-button py-3 px-5 ">Start Game</button>
    </div>
  );
}

export default Home;

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Login from "./Login";
import Game from "../Components/Game";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useAuth();

  return (
    <div className="w-max mt-10 mx-auto">
      <button className="primary-button py-3 px-5 "><Link to="/game">Start Game</Link></button>
    </div>
  );
}

export default Home;

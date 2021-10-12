import React from "react";
import { start } from "../gameplay/start";

const Header = () => {
  //console.log('header called')
  return (
    <div className="Header">
      <h1>Othello</h1>
      <ul>
        <button onClick={start} className="NewGame">New Game</button>
      </ul>
    </div>
  )
}

export default Header
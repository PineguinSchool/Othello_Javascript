import { changePlayer, currentPlayer } from "./changePlayer";
import { autoFlip } from "./autoFlip";

export const colorSwitch = (pieceId) => {
    
  if (document.getElementById(pieceId).style.backgroundColor != "") {
      alert("There is already a peice there");
      return;
  }

  document.getElementById(pieceId).style.backgroundColor = currentPlayer;

  autoFlip(pieceId);

  changePlayer();
}
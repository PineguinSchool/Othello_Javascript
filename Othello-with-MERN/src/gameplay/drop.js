import { changePlayer, currentPlayer } from "./changePlayer";
import { autoFlip } from "./autoFlip";

export const drop = (ev) => {
  
  //console.log(parseInt(ev.target.parentElement.id.substr(1, 2)));
  let dropPosition = parseInt(ev.target.parentElement.id.substr(1, 2));

  if (ev.target.style.backgroundColor != "") {
      alert("There is already a peice there");
      return;
  } else {
    ev.target.style.backgroundColor = currentPlayer;
    autoFlip(dropPosition);
    changePlayer();
  }

} 
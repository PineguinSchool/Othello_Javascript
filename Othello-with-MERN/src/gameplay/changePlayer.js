export let currentPlayer = "white";
export let opposingPlayer = "black";

export const changePlayer = () => {
  console.log(currentPlayer);
  if (currentPlayer == "black") {
      currentPlayer = "white";
      opposingPlayer = "black";
  } else {
      currentPlayer = "black";
      opposingPlayer = "white";
  }
}
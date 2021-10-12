import { currentPlayer, opposingPlayer } from "./changePlayer";

export const autoFlip = (initialPos) => {
    console.log("initial Position: " + initialPos);

    var flipCount = 0;

    //up
    var iUp = initialPos - 10;

    for (var up = 0; up >= 0; iUp = iUp - 10) {
        if (iUp >= 11 && iUp <= 88 && Math.floor(iUp % 10) != 0 && Math.floor(iUp % 10) != 9) {
            //console.log(document.getElementById("p" + iUp).firstChild.style.backgroundColor != currentPlayer);
            if (document.getElementById("p" + (iUp)).firstChild.style.backgroundColor == opposingPlayer) {
                up = up + 1;

                //console.log(up);
            } else if (document.getElementById("p" + (iUp)).firstChild.style.backgroundColor == currentPlayer) {
                //Add flipping
                --up;
                iUp = initialPos - 10;
                for (up; up >= 0; up = up - 1) {
                    document.getElementById("p" + (iUp)).firstChild.style.backgroundColor = currentPlayer;
                    iUp = iUp - 10;
                    ++flipCount;
                }
            } else {
                up = -1;
                //console.log(up);
            }
        } else {
            up = -1;
        }
    }

    //up_right
    var iUpRight = initialPos - 10 + 1;
        
    for (var up_right = 0; up_right >= 0; iUpRight = iUpRight - 10 + 1) {
        if (iUpRight >= 11 && iUpRight <= 88 && Math.floor(iUpRight % 10) != 0 && Math.floor(iUpRight % 10) != 9) {
            if (document.getElementById("p" + (iUpRight)).firstChild.style.backgroundColor == opposingPlayer) {
                up_right = up_right + 1;

                //console.log(up_right);
            } else if (document.getElementById("p" + (iUpRight)).firstChild.style.backgroundColor == currentPlayer) {
                //Add flipping
                --up_right;
                iUpRight = initialPos - 10 + 1;
                for (up_right; up_right >= 0; up_right = up_right - 1) {
                    document.getElementById("p" + (iUpRight)).firstChild.style.backgroundColor = currentPlayer;
                    iUpRight = iUpRight - 10 + 1;
                    ++flipCount;
                }
            } else {
                up_right = -1;
                //console.log(up_right);
            }
        } else {
            up_right = -1;
        }
    }

    //right
    var iRight = initialPos + 1;
    //console.log(iRight)
        
    for (var right = 0; right >= 0; iRight = iRight + 1) {
        if (iRight >= 11 && iRight <= 88 && Math.floor(iRight % 10) != 0 && Math.floor(iRight % 10) != 9) {
            //console.log(document.getElementById("p" + (iRight)).firstChild.style.backgroundColor)
            if (document.getElementById("p" + (iRight)).firstChild.style.backgroundColor == opposingPlayer) {
                right = right + 1;

                //console.log(right);
            } else if (document.getElementById("p" + (iRight)).firstChild.style.backgroundColor == currentPlayer) {
                //Add flipping
                --right;
                iRight = initialPos + 1;
                for (right; right >= 0; right = right - 1) {
                    document.getElementById("p" + (iRight)).firstChild.style.backgroundColor = currentPlayer;
                    iRight = iRight + 1;
                    ++flipCount;
                }
            } else {
                right = -1;
                //console.log(right);
            }
        } else {
            right = -1;
        }
    }

    //down_right
    var iDownRight = initialPos + 10 + 1;


    for (var down_right = 0; down_right >= 0; iDownRight = iDownRight + 10 + 1) {
        if (iDownRight >= 11 && iDownRight <= 88 && Math.floor(iDownRight % 10) != 0 && Math.floor(iDownRight % 10) != 9) {
            if (document.getElementById("p" + (iDownRight)).firstChild.style.backgroundColor == opposingPlayer) {
                down_right = down_right + 1;

                //console.log(down_right);
            } else if (document.getElementById("p" + (iDownRight)).firstChild.style.backgroundColor == currentPlayer) {
                //Add flipping
                --down_right;
                iDownRight = initialPos + 10 + 1;
                for (down_right; down_right >= 0; down_right = down_right - 1) {
                    document.getElementById("p" + (iDownRight)).firstChild.style.backgroundColor = currentPlayer;
                    iDownRight = iDownRight + 10 + 1;
                    ++flipCount;
                }
            } else {
                down_right = -1;
                //console.log(down_right);
            }
        } else {
            down_right = -1;
        }
    }

    //down
    var iDown = initialPos + 10;
        

    for (var down = 0; down >= 0; iDown = iDown + 10) {
        if (iDown >= 11 && iDown <= 88 && Math.floor(iDown % 10) != 0 && Math.floor(iDown % 10) != 9) {
            if (document.getElementById("p" + (iDown)).firstChild.style.backgroundColor == opposingPlayer) {
                down = down + 1;

                //console.log(down);
            } else if (document.getElementById("p" + (iDown)).firstChild.style.backgroundColor == currentPlayer) {
                //Add flipping
                --down;
                iDown = initialPos + 10;
                for (down; down >= 0; down = down - 1) {
                    document.getElementById("p" + (iDown)).firstChild.style.backgroundColor = currentPlayer;
                    iDown = iDown + 10;
                    ++flipCount;
                }
            } else {
                down = -1;
                //console.log(down);
            }
        } else {
            down = -1;
        }
    }

    //down_left
    var iDownLeft = initialPos + 10 - 1;


    for (var down_left = 0; down_left >= 0; iDownLeft = iDownLeft + 10 - 1) {
        if (iDownLeft >= 11 && iDownLeft <= 88 && Math.floor(iDownLeft % 10) != 0 && Math.floor(iDownLeft % 10) != 9) {
            if (document.getElementById("p" + (iDownLeft)).firstChild.style.backgroundColor == opposingPlayer) {
                down_left = down_left + 1;

                //console.log(down_left);
            } else if (document.getElementById("p" + (iDownLeft)).firstChild.style.backgroundColor == currentPlayer) {
                //Add flipping
                --down_left;
                iDownLeft = initialPos + 10 - 1;
                for (down_left; down_left >= 0; down_left = down_left - 1) {
                    document.getElementById("p" + (iDownLeft)).firstChild.style.backgroundColor = currentPlayer;
                    iDownLeft = iDownLeft + 10 - 1;
                    ++flipCount;
                }
            } else {
                down_left = -1;
                //console.log(down_left);
            }
        } else {
            down_left = -1;
        }
    }

    //left
    var iLeft = initialPos - 1;
        

    for (var left = 0; left >= 0; iLeft = iLeft - 1) {
        if (iLeft >= 11 && iLeft <= 88 && Math.floor(iLeft % 10) != 0 && Math.floor(iLeft % 10) != 9) {
            if (document.getElementById("p" + (iLeft)).firstChild.style.backgroundColor == opposingPlayer) {
                left = left + 1;

                //console.log(left);
            } else if (document.getElementById("p" + (iLeft)).firstChild.style.backgroundColor == currentPlayer) {
                //Add flipping
                --left;
                iLeft = initialPos - 1;
                for (left; left >= 0; left = left - 1) {
                    document.getElementById("p" + (iLeft)).firstChild.style.backgroundColor = currentPlayer;
                    iLeft = iLeft - 1;
                    ++flipCount;
                }
            } else {
                left = -1;
                //console.log(left);
            }
        } else {
            left = -1;
        }
    }
    
    //up_left
    var iUpLeft = initialPos - 10 - 1;
        

    for (var up_left = 0; up_left >= 0; iUpLeft = iUpLeft - 10 - 1) {
        if (iUpLeft >= 11 && iUpLeft <= 88 && Math.floor(iUpLeft % 10) != 0 && Math.floor(iUpLeft % 10) != 9) {
            if (document.getElementById("p" + (iUpLeft)).firstChild.style.backgroundColor == opposingPlayer) {
                up_left = up_left + 1;

                //console.log(up_left);
            } else if (document.getElementById("p" + (iUpLeft)).firstChild.style.backgroundColor == currentPlayer) {
                //Add flipping
                --up_left;
                iUpLeft = initialPos - 10 - 1;
                for (up_left; up_left >= 0; up_left = up_left - 1) {
                    document.getElementById("p" + (iUpLeft)).firstChild.style.backgroundColor = currentPlayer;
                    iUpLeft = iUpLeft - 10 - 1;
                    ++flipCount;
                }
            } else {
                up_left = -1;
                //console.log(up_left);
            }
        } else {
        up_left = -1;
        }
    }

    //console.log("Flip count: " + flipCount);
if (flipCount == 0) {
    document.getElementById("p" + initialPos).firstChild.style.backgroundColor = "";
    alert("Not a valid placement");
    changePlayer();
}
}
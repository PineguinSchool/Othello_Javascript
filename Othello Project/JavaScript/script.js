var windowH = window.innerHeight;
var windowW = window.innerWidth;
var currentPlayer = "white";
var opposingPlayer = "black";
var dropPosition;
var piece = currentPlayer;
var pieceId = "darkcyan";
/*
document.addEventListener("resize", boardResize(windowH, windowH));

function boardResize(height, width) {
    //document.getElementById("board").style.width;
    //document.getElementById("board").style.height;
    console.log("test");
}
*/

//Testing current player, then switching to opposing
function changePlayer() {
    if (document.getElementById("piece").style.backgroundColor == "black") {
        document.getElementById("piece").style.backgroundColor = "white";

        currentPlayer = "white";
        opposingPlayer = "black";

    } else {
        document.getElementById("piece").style.backgroundColor = "black";

        currentPlayer = "black";
        opposingPlayer = "white";
    }
}

//On click lets it change to next color
function colorSwitch(pieceId) {

    console.log(document.getElementById(pieceId).style.backgroundColor);
    
    if (document.getElementById(pieceId).style.backgroundColor == "") {
        document.getElementById(pieceId).style.backgroundColor = "black";
    } else if (document.getElementById(pieceId).style.backgroundColor == "black") {
        document.getElementById(pieceId).style.backgroundColor = "white";
    } else if (document.getElementById(pieceId).style.backgroundColor == "white") {
        document.getElementById(pieceId).style.backgroundColor = "";
    }

}


function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    ev.dataTransfer.setData("style.backgroundColor", ev.target.id);
    dropPosition = ev.target.id;
    //console.log(dropPosition);
    //console.log(document.getElementById(dropPosition).style.backgroundColor);

    if (document.getElementById(dropPosition).style.backgroundColor != "") {
        alert("There is already a peice there");
        return;
    }

    document.getElementById(dropPosition).style.backgroundColor = currentPlayer;

    autoFlip(dropPosition);

    changePlayer();
} 





function autoFlip(initialPos) {
    //Changing initialPos into a number rather than a string
    initialPos = parseInt(initialPos.substr(8, 2));
    console.log("initial Position: " + initialPos);

    var flipCount = 0;

    //up
    var iUp = initialPos - 10;
    
    for (var up = 0; up >= 0; iUp = iUp - 10) {
        if (iUp >= 11 && iUp <= 88 && Math.floor(iUp % 10) != 0 && Math.floor(iUp % 10) != 9) {
            if (document.getElementById("position" + (iUp)).style.backgroundColor == opposingPlayer) {
                up = up + 1;

                //console.log(up);
            } else if (document.getElementById("position" + (iUp)).style.backgroundColor == currentPlayer) {
                //Add flipping
                --up;
                iUp = initialPos - 10;
                for (up; up >= 0; up = up - 1) {
                    document.getElementById("position" + (iUp)).style.backgroundColor = currentPlayer;
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
            if (document.getElementById("position" + (iUpRight)).style.backgroundColor == opposingPlayer) {
                up_right = up_right + 1;

                //console.log(up_right);
            } else if (document.getElementById("position" + (iUpRight)).style.backgroundColor == currentPlayer) {
                //Add flipping
                --up_right;
                iUpRight = initialPos - 10 + 1;
                for (up_right; up_right >= 0; up_right = up_right - 1) {
                    document.getElementById("position" + (iUpRight)).style.backgroundColor = currentPlayer;
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
        
    for (var right = 0; right >= 0; iRight = iRight + 1) {
        if (iRight >= 11 && iRight <= 88 && Math.floor(iRight % 10) != 0 && Math.floor(iRight % 10) != 9) {
            if (document.getElementById("position" + (iRight)).style.backgroundColor == opposingPlayer) {
                right = right + 1;

                //console.log(right);
            } else if (document.getElementById("position" + (iRight)).style.backgroundColor == currentPlayer) {
                //Add flipping
                --right;
                iRight = initialPos + 1;
                for (right; right >= 0; right = right - 1) {
                    document.getElementById("position" + (iRight)).style.backgroundColor = currentPlayer;
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
            if (document.getElementById("position" + (iDownRight)).style.backgroundColor == opposingPlayer) {
                down_right = down_right + 1;

                //console.log(down_right);
            } else if (document.getElementById("position" + (iDownRight)).style.backgroundColor == currentPlayer) {
                //Add flipping
                --down_right;
                iDownRight = initialPos + 10 + 1;
                for (down_right; down_right >= 0; down_right = down_right - 1) {
                    document.getElementById("position" + (iDownRight)).style.backgroundColor = currentPlayer;
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
            if (document.getElementById("position" + (iDown)).style.backgroundColor == opposingPlayer) {
                down = down + 1;

                //console.log(down);
            } else if (document.getElementById("position" + (iDown)).style.backgroundColor == currentPlayer) {
                //Add flipping
                --down;
                iDown = initialPos + 10;
                for (down; down >= 0; down = down - 1) {
                    document.getElementById("position" + (iDown)).style.backgroundColor = currentPlayer;
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
            if (document.getElementById("position" + (iDownLeft)).style.backgroundColor == opposingPlayer) {
                down_left = down_left + 1;

                //console.log(down_left);
            } else if (document.getElementById("position" + (iDownLeft)).style.backgroundColor == currentPlayer) {
                //Add flipping
                --down_left;
                iDownLeft = initialPos + 10 - 1;
                for (down_left; down_left >= 0; down_left = down_left - 1) {
                    document.getElementById("position" + (iDownLeft)).style.backgroundColor = currentPlayer;
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
            if (document.getElementById("position" + (iLeft)).style.backgroundColor == opposingPlayer) {
                left = left + 1;

                //console.log(left);
            } else if (document.getElementById("position" + (iLeft)).style.backgroundColor == currentPlayer) {
                //Add flipping
                --left;
                iLeft = initialPos - 1;
                for (left; left >= 0; left = left - 1) {
                    document.getElementById("position" + (iLeft)).style.backgroundColor = currentPlayer;
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
            if (document.getElementById("position" + (iUpLeft)).style.backgroundColor == opposingPlayer) {
                up_left = up_left + 1;

                //console.log(up_left);
            } else if (document.getElementById("position" + (iUpLeft)).style.backgroundColor == currentPlayer) {
                //Add flipping
                --up_left;
                iUpLeft = initialPos - 10 - 1;
                for (up_left; up_left >= 0; up_left = up_left - 1) {
                    document.getElementById("position" + (iUpLeft)).style.backgroundColor = currentPlayer;
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

    console.log("Flip count: " + flipCount);
if (flipCount == 0) {
    document.getElementById("position" + initialPos).style.backgroundColor = "";
    alert("Not a valid placement");
    changePlayer();
}
}

function end() {
    //Add piece counting and declare a winner
    var testingPos = 0;
    var whiteCount = 0;
    var blackCount = 0;

    for (testingPos = 11; testingPos <= 18; ++testingPos) {
        if (document.getElementById("position" + testingPos).style.backgroundColor == "white"){
            ++whiteCount;
        } else if (document.getElementById("position" + testingPos).style.backgroundColor == "black") {
            ++blackCount;
        }
    }

    for (testingPos = 21; testingPos <= 28; ++testingPos) {
        if (document.getElementById("position" + testingPos).style.backgroundColor == "white"){
            ++whiteCount;
        } else if (document.getElementById("position" + testingPos).style.backgroundColor == "black") {
            ++blackCount;
        }
    }

    for (testingPos = 31; testingPos <= 38; ++testingPos) {
        if (document.getElementById("position" + testingPos).style.backgroundColor == "white"){
            ++whiteCount;
        } else if (document.getElementById("position" + testingPos).style.backgroundColor == "black") {
            ++blackCount;
        }
    }
    
    for (testingPos = 41; testingPos <= 48; ++testingPos) {
        if (document.getElementById("position" + testingPos).style.backgroundColor == "white"){
            ++whiteCount;
        } else if (document.getElementById("position" + testingPos).style.backgroundColor == "black") {
            ++blackCount;
        }
    }
    
    for (testingPos = 51; testingPos <= 58; ++testingPos) {
        if (document.getElementById("position" + testingPos).style.backgroundColor == "white"){
            ++whiteCount;
        } else if (document.getElementById("position" + testingPos).style.backgroundColor == "black") {
            ++blackCount;
        }
    }
    
    for (testingPos = 61; testingPos <= 68; ++testingPos) {
        if (document.getElementById("position" + testingPos).style.backgroundColor == "white"){
            ++whiteCount;
        } else if (document.getElementById("position" + testingPos).style.backgroundColor == "black") {
            ++blackCount;
        }
    }

    for (testingPos = 71; testingPos <= 78; ++testingPos) {
        if (document.getElementById("position" + testingPos).style.backgroundColor == "white"){
            ++whiteCount;
        } else if (document.getElementById("position" + testingPos).style.backgroundColor == "black") {
            ++blackCount;
        }
    }
    
    for (testingPos = 81; testingPos <= 88; ++testingPos) {
        if (document.getElementById("position" + testingPos).style.backgroundColor == "white"){
            ++whiteCount;
        } else if (document.getElementById("position" + testingPos).style.backgroundColor == "black") {
            ++blackCount;
        }
    }

    if (whiteCount > blackCount) {
        alert("White is the Winner!");
    } else if (blackCount > whiteCount) {
        alert("Black is the Winner!");
    } else {
        alert("There is a tie!");
    }
}
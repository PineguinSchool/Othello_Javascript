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
    var i = initialPos - 10;
    
if (i >= 11 && i <= 88 && Math.floor(i % 10) != 0 && Math.floor(i % 10) != 9) {
    for (var up = 0; up >= 0; i = i - 10) {
        
        if (document.getElementById("position" + (i)).style.backgroundColor == opposingPlayer) {
            up = up + 1;

            //console.log(up);
        } else if (document.getElementById("position" + (i)).style.backgroundColor == currentPlayer) {
            //Add flipping
            --up;
            i = initialPos - 10;
            for (up; up >= 0; up = up - 1) {
                document.getElementById("position" + (i)).style.backgroundColor = currentPlayer;
                i = i - 10;
                ++flipCount;
            }
        } else {
            up = -1;
            //console.log(up);
        }
    }
}

    //up_right
    var i = initialPos - 10 + 1;
        
if (i >= 11 && i <= 88 && Math.floor(i % 10) != 0 && Math.floor(i % 10) != 9) {
    for (var up_right = 0; up_right >= 0; i = i - 10 + 1) {

        if (document.getElementById("position" + (i)).style.backgroundColor == opposingPlayer) {
            up_right = up_right + 1;

            //console.log(up_right);
        } else if (document.getElementById("position" + (i)).style.backgroundColor == currentPlayer) {
            //Add flipping
            --up_right;
            i = initialPos - 10 + 1;
            for (up_right; up_right >= 0; up_right = up_right - 1) {
                document.getElementById("position" + (i)).style.backgroundColor = currentPlayer;
                i = i - 10 + 1;
                ++flipCount;
            }
        } else {
            up_right = -1;
            //console.log(up_right);
        }
    }
}

    //right
    var i = initialPos + 1;
        
if (i >= 11 && i <= 88 && Math.floor(i % 10) != 0 && Math.floor(i % 10) != 9) {
    for (var right = 0; right >= 0; i = i + 1) {

        if (document.getElementById("position" + (i)).style.backgroundColor == opposingPlayer) {
            right = right + 1;

            //console.log(right);
        } else if (document.getElementById("position" + (i)).style.backgroundColor == currentPlayer) {
            //Add flipping
            --right;
            i = initialPos + 1;
            for (right; right >= 0; right = right - 1) {
                document.getElementById("position" + (i)).style.backgroundColor = currentPlayer;
                i = i + 1;
                ++flipCount;
            }
        } else {
            right = -1;
            //console.log(right);
        }
    }
}

    //down_right
    var i = initialPos + 10 + 1;

if (i >= 11 && i <= 88 && Math.floor(i % 10) != 0 && Math.floor(i % 10) != 9) {
    for (var down_right = 0; down_right >= 0; i = i + 10 + 1) {
        
        if (document.getElementById("position" + (i)).style.backgroundColor == opposingPlayer) {
            down_right = down_right + 1;

            //console.log(down_right);
        } else if (document.getElementById("position" + (i)).style.backgroundColor == currentPlayer) {
            //Add flipping
            --down_right;
            i = initialPos + 10 + 1;
            for (down_right; down_right >= 0; down_right = down_right - 1) {
                document.getElementById("position" + (i)).style.backgroundColor = currentPlayer;
                i = i + 10 + 1;
                ++flipCount;
            }
        } else {
            down_right = -1;
            //console.log(down_right);
        }
    }
}

    //down
    var i = initialPos + 10;
        
if (i >= 11 && i <= 88 && Math.floor(i % 10) != 0 && Math.floor(i % 10) != 9) {
    for (var down = 0; down >= 0; i = i + 10) {

        if (document.getElementById("position" + (i)).style.backgroundColor == opposingPlayer) {
            down = down + 1;

            //console.log(down);
        } else if (document.getElementById("position" + (i)).style.backgroundColor == currentPlayer) {
            //Add flipping
            --down;
            i = initialPos + 10;
            for (down; down >= 0; down = down - 1) {
                document.getElementById("position" + (i)).style.backgroundColor = currentPlayer;
                i = i + 10;
                ++flipCount;
            }
        } else {
            down = -1;
            //console.log(down);
        }
    }
}

    //down_left
    var i = initialPos + 10 - 1;

if (i >= 11 && i <= 88 && Math.floor(i % 10) != 0 && Math.floor(i % 10) != 9) {
    for (var down_left = 0; down_left >= 0; i = i + 10 - 1) {
        
        if (document.getElementById("position" + (i)).style.backgroundColor == opposingPlayer) {
            down_left = down_left + 1;

            //console.log(down_left);
        } else if (document.getElementById("position" + (i)).style.backgroundColor == currentPlayer) {
            //Add flipping
            --down_left;
            i = initialPos + 10 - 1;
            for (down_left; down_left >= 0; down_left = down_left - 1) {
                document.getElementById("position" + (i)).style.backgroundColor = currentPlayer;
                i = i + 10 - 1;
                ++flipCount;
            }
        } else {
            down_left = -1;
            //console.log(down_left);
        }
    }
}

    //left
    var i = initialPos - 1;
        
if (i >= 11 && i <= 88 && Math.floor(i % 10) != 0 && Math.floor(i % 10) != 9) {
    for (var left = 0; left >= 0; i = i - 1) {
        
        if (document.getElementById("position" + (i)).style.backgroundColor == opposingPlayer) {
            left = left + 1;

            //console.log(left);
        } else if (document.getElementById("position" + (i)).style.backgroundColor == currentPlayer) {
            //Add flipping
            --left;
            i = initialPos - 1;
            for (left; left >= 0; left = left - 1) {
                document.getElementById("position" + (i)).style.backgroundColor = currentPlayer;
                i = i - 1;
                ++flipCount;
            }
        } else {
            left = -1;
            //console.log(left);
        }
    }
}
    
    //up_left
    var i = initialPos - 10 - 1;
        
if (i >= 11 && i <= 88 && Math.floor(i % 10) != 0 && Math.floor(i % 10) != 9) {
    for (var up_left = 0; up_left >= 0; i = i - 10 - 1) {
        
        if (document.getElementById("position" + (i)).style.backgroundColor == opposingPlayer) {
            up_left = up_left + 1;

            //console.log(up_left);
        } else if (document.getElementById("position" + (i)).style.backgroundColor == currentPlayer) {
            //Add flipping
            --up_left;
            i = initialPos - 10 - 1;
            for (up_left; up_left >= 0; up_left = up_left - 1) {
                document.getElementById("position" + (i)).style.backgroundColor = currentPlayer;
                i = i - 10 - 1;
                ++flipCount;
            }
        } else {
            up_left = -1;
            //console.log(up_left);
        }
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
}
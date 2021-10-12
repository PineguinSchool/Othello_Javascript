export const end = () => {
  //Add piece counting and declare a winner
  var testingPos = 0;
  var whiteCount = 0;
  var blackCount = 0;

  for (testingPos = 11; testingPos <= 18; ++testingPos) {
      if (document.getElementById("p" + testingPos).style.backgroundColor == "white"){
          ++whiteCount;
      } else if (document.getElementById("p" + testingPos).style.backgroundColor == "black") {
          ++blackCount;
      }
  }

  for (testingPos = 21; testingPos <= 28; ++testingPos) {
      if (document.getElementById("p" + testingPos).style.backgroundColor == "white"){
          ++whiteCount;
      } else if (document.getElementById("p" + testingPos).style.backgroundColor == "black") {
          ++blackCount;
      }
  }

  for (testingPos = 31; testingPos <= 38; ++testingPos) {
      if (document.getElementById("p" + testingPos).style.backgroundColor == "white"){
          ++whiteCount;
      } else if (document.getElementById("p" + testingPos).style.backgroundColor == "black") {
          ++blackCount;
      }
  }
  
  for (testingPos = 41; testingPos <= 48; ++testingPos) {
      if (document.getElementById("p" + testingPos).style.backgroundColor == "white"){
          ++whiteCount;
      } else if (document.getElementById("p" + testingPos).style.backgroundColor == "black") {
          ++blackCount;
      }
  }
  
  for (testingPos = 51; testingPos <= 58; ++testingPos) {
      if (document.getElementById("p" + testingPos).style.backgroundColor == "white"){
          ++whiteCount;
      } else if (document.getElementById("p" + testingPos).style.backgroundColor == "black") {
          ++blackCount;
      }
  }
  
  for (testingPos = 61; testingPos <= 68; ++testingPos) {
      if (document.getElementById("p" + testingPos).style.backgroundColor == "white"){
          ++whiteCount;
      } else if (document.getElementById("p" + testingPos).style.backgroundColor == "black") {
          ++blackCount;
      }
  }

  for (testingPos = 71; testingPos <= 78; ++testingPos) {
      if (document.getElementById("p" + testingPos).style.backgroundColor == "white"){
          ++whiteCount;
      } else if (document.getElementById("p" + testingPos).style.backgroundColor == "black") {
          ++blackCount;
      }
  }
  
  for (testingPos = 81; testingPos <= 88; ++testingPos) {
      if (document.getElementById("p" + testingPos).style.backgroundColor == "white"){
          ++whiteCount;
      } else if (document.getElementById("p" + testingPos).style.backgroundColor == "black") {
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
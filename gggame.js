let gameover = false;
let moves = 0;
let playerturn = "X";
let span = document.getElementsByTagName("span");
let btn =
  '<button onclick="playnew()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg></button>';

function play(y) {
  if (y.dataset.player == "none" && gameover == false) {
    y.innerText = playerturn;
    y.dataset.player = playerturn;
    if (playerturn == "X") {
      playerturn = "O";
    } else if (playerturn == "O") {
      playerturn = "X";
    }
    moves++;
  }
  checkgamewin(1, 2, 3);
  checkgamewin(4, 5, 6);
  checkgamewin(7, 8, 9);
  checkgamewin(1, 4, 7);
  checkgamewin(2, 5, 8);
  checkgamewin(3, 6, 9);
  checkgamewin(1, 5, 9);
  checkgamewin(7, 5, 3);

  if (moves == 9 && gameover == false) {
    draw(); //function call
    gameover = true;
  }
}

function checkgamewin(a, b, c) {
  a--;
  b--;
  c--;
  if (
    span[a].dataset.player === span[b].dataset.player &&
    span[b].dataset.player === span[c].dataset.player &&
    span[a].dataset.player === span[c].dataset.player &&
    (span[a].dataset.player === "X" || span[a].dataset.player === "O") &&
    gameover == false
  ) {
    winfunc(span[a].innerHTML); //function call
  }
}

function draw() {
  let div = document.createElement("div");

  div.className = "alert";
  let text = `Draw !!` + btn;
  div.innerHTML = text;
  document.getElementsByTagName("body")[0].appendChild(div);
}
// function resetgame() {
//   console.log("draw");
//   document
//     .getElementsByClassName("alert")[0]
//     .parentNode.removeChild(document.getElementsByClassName("alert")[0]);

//   for (let i = 0; i < span.length; i++) {
//     span[i].innerHTML = "&nbsp;";
//     span[i].dataset.player = "none";
//     gameover = false;
//   }
// }
function winfunc(a) {
  let div = document.createElement("div");
  let text = `player ${a} wins ` + btn;
  div.className = "alert";
  div.innerHTML = text;
  document.getElementsByTagName("body")[0].appendChild(div);
  moves = 0;
  gameover = false;
}

function playnew() {
  document
    .getElementsByClassName("alert")[0]
    .parentNode.removeChild(document.getElementsByClassName("alert")[0]);

  for (let i = 0; i < span.length; i++) {
    span[i].innerHTML = "&nbsp;";
    span[i].dataset.player = "none";
    gameover = false;
  }
}

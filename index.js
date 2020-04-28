let hStandPoint = 0;
let vStandPoint = 0;

function goRight() {
  hStandPoint += 10;
  mini.style.left = hStandPoint + "px";
}
function goLeft() {
  hStandPoint -= 10;
  mini.style.left = hStandPoint + "px";
}
function goUp() {
  vStandPoint -= 10;
  mini.style.top = vStandPoint + "px";
}
function goDown() {
  vStandPoint += 10;
  mini.style.top = vStandPoint + "px";
}

let mini = document.querySelector(".mini");
let body = document.querySelector("body");
body.addEventListener("keypress", move);

function move(e) {
  console.log(e);
  if (e.code == "KeyH") goRight();
  if (e.code == "KeyG") goLeft();
  if (e.code == "KeyY") goUp();
  if (e.code == "KeyB") goDown();
  if (
    hStandPoint >= window.innerWidth / 2.3 &&
    vStandPoint >= window.innerHeight / 2.6
  )
    // you can use || or  &&
    alert("You win 💪🏻");
}
console.log(window.innerWidth);
console.log(window.innerHeight);

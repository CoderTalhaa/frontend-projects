let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgConatiner = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let draw = document.querySelector("#draw")

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () =>{
  for(let box of boxes){
      box.disabled = true
  }
}

const enableBoxes = () =>{
  for(let box of boxes){
      box.disabled = false
      box.innerText = ""
  }
}

const showWinner = (winner) =>{
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgConatiner.style.display="block"
}

const resetGame = () =>{
    turnO = true
    enableBoxes()
    msgConatiner.style.display="none"
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turnO) {
      box.innerText = "O";
      box.innerHTML.style.color = ("#fff")
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
    checkDraw();
  });
});


const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner",pos1Val)

        showWinner(pos1Val)
      }
    }
  }
};

const checkDraw = () =>{



}



resetBtn.addEventListener("click",resetGame)
let boxes= document.querySelectorAll('#box')
let reset= document.querySelector('#reset')
let winnerBox= document.querySelector('#winner');
let winnerText= document.querySelector('#wintext2');
let newGame= document.querySelector('#newGame');
let turnO= true;
let gif= document.querySelector('.giphy-embed')
let winnerTextH1= document.querySelector('#wintext')
const winningLogic= [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) =>{
  box.addEventListener("click", ()=>{
    if(turnO){
      box.innerText="X"
      box.disabled=true
      turnO=false
    }else{
      box.innerText="O"
      turnO=true
    }
    winnerCheck ()
    tiedCheck()
    box.disabled=true
  })
  reset.addEventListener("click", ()=>{
    box.innerText=""
    box.disabled=false
  })
  newGame.addEventListener("click", ()=>{
    box.innerText=""
    box.disabled=false
    winnerBox.style.display= "none"
  })
});

const winnerCheck = ()=>{
  for (logic of winningLogic){
    let pos1 = boxes[logic[0]].innerText;
    let pos2 = boxes[logic[1]].innerText;
    let pos3 = boxes[logic[2]].innerText;
    
    if (pos1 != "" && pos2 != "" && pos3 != ""){
      if (pos1 === pos2 && pos2 === pos3){
        console.log("winner", pos1);
        boxes.forEach((box)=>{
        box.disabled=true
        winnerBox.style.display= "block"
        winnerText.innerText=`Player "${pos1}" win the Game`
        tiedCheck.disabled=true
        }
        )
      }
    }
    }
  }
  const tiedCheck = () => {
    let isTie = true;
    boxes.forEach((box) => {
      if (box.innerText === "") {
        isTie = false;
      }
    });
  
    if (isTie) {
      winnerBox.style.display = "block";
      gif.style.display='none'
      winnerTextH1.innerText="Let's play Again"
      winnerText.innerText = `Game Tied`;
      boxes.forEach((box) => {
      box.disabled = true;
      console.log ("no winner")
      });
    }
  };   

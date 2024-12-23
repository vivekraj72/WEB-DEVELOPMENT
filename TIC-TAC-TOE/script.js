let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let audioTune = new Audio("ting.mp3");
let gif = document.querySelector(".gif");
let newReset = new Audio("gameover.mp3");



let trun0 = true;
let count = 0;


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

const resetGame = () =>{
    newReset.play();
    trun0 = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    
};




boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(trun0){
            box.innerText = '0';
            trun0 = false;
        }
        else{
            box.innerText = 'X';
            trun0 = true;
        }
  
        audioTune.play();
        box.disabled = true;
        count++;


        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
        
    }
     );

});

const gameDraw = () => {
    msg.innerText = `Game is Draw`;
    msgContainer.classList.remove("hide");
    gif.classList.add("gif");
    disableBoxes();

};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};




const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};



const showWinner = (winner) =>{
    msg.innerText = `conguratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    gif.classList.remove("gif");
    disableBoxes();

};



const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame)
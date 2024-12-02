let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newgameBtn = document.querySelector(".new");
let resetgameBtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msgBtn = document.querySelector(".msg");

let turn0 = true;

const winpatterns = [
    [0, 1, 2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];


const resetGame = ()=>{
    turn0=true;
    enableBtn();
    msgBtn.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
        box.innerText = "O";
        turn0=false;}
        else{ 
            box.innerText = "X";
            turn0=true;
            
        }
    
        box.disabled=true;


    checkWinner();
    
    })
    

    
});

const disableBtn = () => {
    for (let box of boxes) {
    box.disabled=true;
   
}}

const enableBtn =()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(Winner) =>{
    msgBtn.innerText = `The winner is ${Winner}`;
    msgBtn.classList.remove("hide");
    disableBtn();

}


const checkWinner = () => {
    for(pattern of winpatterns){
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
    

    if(a != "" && b != "" && c != ""){
        if(a == b && b == c){
            
            showWinner(a);
    }
}
}};

newgameBtn.addEventListener("click",resetGame);
resetgameBtn.addEventListener("click",resetGame);
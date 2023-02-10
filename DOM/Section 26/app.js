const p1Button = document.querySelector("#playerOne");
const p2Button = document.querySelector("#playerTwo");
const resetButton = document.querySelector("#reset");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");

let p1Points = 0;
let p2Points = 0;

const winningScore = 6;
let isGameOver = false;

p1Button.addEventListener("click", function(){
    if(!isGameOver){
        p1Points += 1;
        if(p1Points === winningScore){
            isGameOver = true;
        }
    }
    p1Score.innerText = p1Points;
})

p2Button.addEventListener("click", function(){
    if(!isGameOver){
        p2Points += 1;
        if(p2Points === winningScore){
            isGameOver = true;
        }
    }
    p2Score.innerText = p2Points;
})

resetButton.addEventListener("click", function(){
    p1Points = 0;
    p2Points = 0;
    isGameOver = false;
    p1Score.innerText = p1Points;
    p2Score.innerText = p2Points;
})

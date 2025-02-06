let userScore=0;
let compScore=0;

let userDisplayScore=document.querySelector("#user-score");
let compDisplayScore=document.querySelector("#comp-score");

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

//comp choice
const genCompChoice= () =>{
    const options=["rock","paper","scissors"];
    const rndIdx= Math.floor(Math.random()*3);
    return options[rndIdx];
};

//userchoice
choices.forEach((choice)=> {
    choice.addEventListener("click",() => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});


//draw game
const drawGame=()=>{
    console.log("Draw Game");
    msg.innerText= "Draw Game! Play Again.";
    msg.style.backgroundColor="#48aaa3";
};

//winner
const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin==true){
        userScore++;
        userDisplayScore.innerText= userScore;
        msg.innerText= `You Won! Your ${userChoice} beats Comp's ${compChoice}`;
        msg.style.backgroundColor="#14c514";
    }
    else{
        compScore++;
        compDisplayScore.innerText= compScore;
        msg.innerText= `You Lost! Comp's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#ce4a4a";
    }
};

//game
const playGame= (userChoice)=>{
    const compChoice= genCompChoice();
    if(userChoice=== compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"?false:true;
        }
        else if(userChoice==="scissors"){
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

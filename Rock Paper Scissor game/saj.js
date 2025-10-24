alert("Hello! Welcome to Our Game ");

let userScore = 0;
let compScore = 0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");




const genComputerchoice= () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame=()=> {
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin ){
    userScore++;

userScorePara.innerText = userScore;
msg.innertext='You win! Your ${userChoice} beats ${compChoice}';
 msg.style.backgroundcolor= "green";
} 
else{
    compScore++;
    msg.innerText='You lost. ${compChoice} beats Your ${userChoice}';
     msg.style.backgroundcolor="red";
    }
};




const playGame=(userChoice) => {
    //Ganerate comp choce
    const compChoice = genCompChoice();

    if(userChoice===compChoice) {
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //
            userWin=compChoice==="paper"? false : true;
        }
        else if (userChoice==="paper"){
            //
            userWin=compChoice==="scissors"?false:true;
        }


         else {
            userWin = compChoice=="rock" ?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};



choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        console.log("choice was clicked");
       // const userChoice = choice.getAttribute("id");
       // playGame(userChoice);
    });

});
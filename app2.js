let userScore = 0;
let compScore = 0;


const  choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScoreP = document.querySelector("#userscore");
const compScoreP = document.querySelector("#compscore");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    
    msg.innerText = "Game Was Draw. Play again.";
    msg.style.backgroundColor = "#050B2E";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin) {

        userScore++;
        userScoreP.innerText = userScore;
        console.log("You Won!!");
        msg.innerText = `You Won!! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }else{

        compScore++;
        compScoreP.innerText = compScore;
        console.log("You Lost");
        msg.innerText = `You Lost!!  ${compChoice} beats  your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
};




const playGame = (userChoice) => {
    
    //Generate Computer Choice
    const compChoice  = genCompChoice();
    


    if(userChoice === compChoice) {
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;    
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice , compChoice);
    }
};

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    });
});
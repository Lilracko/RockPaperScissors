function getComputerChoice(){
   const randomNumber= Math.floor(Math.random()*3) 
   switch (randomNumber){
   case 0:
    return 'rock';
   case 1:
    return 'paper';
   case 2:
    return 'scissors';  
}
const computerchoice = getComputerChoice();
}
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors.").toLowerCase();
    }

    return choice;
}
const humanChoice = getHumanChoice();
let humanscore= 0;
let computerscore =0;

function playRound(humanChoice, computerchoice){
    humanChoice = humanChoice.toLowerCase();

    if (
        (humanChoice === 'rock' && computerchoice === 'scissors') ||
        (humanChoice === 'paper' && computerchoice === 'rock') ||
        (humanChoice === 'scissors' && computerchoice === 'paper')
    ){
        humanscore+++
        console.log('You Win! ${humanChoice} beats ${computerChoice}');
    }
    else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) 
    {
        computerscore+++
        console.log('You lose! ${computerChoice} beats ${humanChoice}');   
    }
    else {
        console.log("It's a tie! Both chose ${humanchoice}");
    }
    console.log('Scores- You: ${humanscore} | Computer: ${computerscore}');
}
function playGame(){
    playRound();
    for (let i =0; i<5; i++) {
        const humanChoice=getHumanChoice();
        const  computerChoice = getComputerChoice();
    }
}
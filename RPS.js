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
}
const computerchoice = getComputerChoice();{
function getHumanChoice
    let choice = prompt("Eneter your choice:rock, paper, or scissors").toLowerCase();
    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors.").toLowerCase
    }
    return choice;
    }
    const humanchoice = getHumanChoice();
    console.log('Human Choice',humanchoice)

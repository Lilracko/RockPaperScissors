function playGame() {
    // Local variables for scores
    let humanScore = 0;
    let computerScore = 0;

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (
            (computerChoice === 'rock' && humanChoice === 'scissors') ||
            (computerChoice === 'paper' && humanChoice === 'rock') ||
            (computerChoice === 'scissors' && humanChoice === 'paper')
        ) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            console.log(`It's a tie! Both chose ${humanChoice}`);
        }

        console.log(`Scores - You: ${humanScore} | Computer: ${computerScore}`);
    }

    // Function to get computer choice
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3); // Generates random index (0, 1, or 2)
        return choices[randomIndex];
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        // Get new choices for each round
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice(); // Call getComputerChoice to get new choice
        
        // Call playRound with the choices
        playRound(humanChoice, computerChoice);
    }

    // Determine the overall winner
    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (computerScore > humanScore) {
        console.log('You lose the game!');
    } else {
        console.log('It\'s a tie game!');
    }
}

// Helper function to get human choice
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();

    while (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt("Invalid choice! Please enter rock, paper, or scissors.").toLowerCase();
    }

    return choice;
}

// Start the game
playGame();

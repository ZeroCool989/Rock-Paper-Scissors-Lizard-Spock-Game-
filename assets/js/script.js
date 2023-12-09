// Global score variables
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let isMuted = false; // Track if the game sounds are muted

// Function called when the player makes a choice
function playerChoice(playerSelection) {
    // Generate a random choice for the computer
    const computerSelection = computerChoice();
    // Display both player's and computer's choices
    displayChoices(playerSelection, computerSelection);
    // Determine the winner and get the result message
    const result = determineWinner(playerSelection, computerSelection);
    // Update the scoreboard with the new scores
    updateScoreboard();
    // Display the result message on the screen
    document.getElementById('result').innerText = result;
    // Play the appropriate sound based on the result
    playSound(result);
    // Start the bouncing animation for the chosen images
    startBouncing();
}

// Function to display the choices of the player and computer
function displayChoices(playerSelection, computerSelection) {
    // Get the HTML elements for displaying choices
    const playerChoiceImage = document.getElementById('playerChoiceImage');
    const computerChoiceImage = document.getElementById('computerChoiceImage');

    // Set the background images for both choices
    playerChoiceImage.style.backgroundImage = `url('assets/images/${playerSelection}.png')`;
    computerChoiceImage.style.backgroundImage = `url('assets/images/${computerSelection}.png')`;
}

// Function to update the scoreboard
function updateScoreboard() {
    // Update the score values in the HTML
    document.getElementById('playerScore').innerText = playerScore;
    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('drawScore').innerText = drawScore;
}

// Function to get a random choice for the computer
function computerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner of the round
function determineWinner(playerSelection, computerSelection) {
    // Define the winning conditions for each choice
    const winningConditions = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock']
    };
    // Determine the winner based on the choices
    if (playerSelection === computerSelection) {
        drawScore++;
        return "It's a draw!";
    } else if (winningConditions[playerSelection].includes(computerSelection)) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Function to play sound based on the game result
function playSound(result) {
    if (isMuted) return; // Do not play sound if muted

    let sound;
    if (result.includes('win')) {
        sound = document.getElementById('winSound');
    } else if (result.includes('lose')) {
        sound = document.getElementById('loseSound');
    } else {
        sound = document.getElementById('tieSound');
    }
    sound.play();
}



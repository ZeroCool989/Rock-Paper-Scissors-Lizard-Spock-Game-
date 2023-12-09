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


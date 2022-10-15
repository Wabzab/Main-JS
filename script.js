function computerPlay() {
    let selection = Math.floor(Math.random()*3);
    return(validPlays[selection]);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
    if (playerSelection == computerSelection) {
        return ([`${playerSelection} ties with ${computerSelection}. Draw!`, 2])
    }
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return (['Rock wins to scissors. Player wins!', 0]);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return (['Paper wins to rock. Player wins!', 0])
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return (['Scissors win to paper. Player wins!', 0]);
    } 
    return ([`${playerSelection} loses to ${computerSelection}. Computer wins!`, 1])
}

function playerPlay() {
    let playerSelection;
    do {
        if (playerSelection != undefined) {
            console.log(`'${playerSelection}' is not one of [Rock - Paper - Scissors]`);
        }
        playerSelection = prompt('Enter selection (Rock - Paper - Scissors): ').toLocaleLowerCase();
    } while (validPlays.indexOf(playerSelection) === -1);
    return(playerSelection);
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        let roundResults = playRound(playerSelection, computerSelection);
        if (roundResults[1] === 0) {
            playerWins++;
        } else if (roundResults[1] === 1) {
            computerWins++;
        }
        console.log(roundResults[0]);
    }
    
    if (playerWins > computerWins) {
        console.log(`Player wins with a score of ${playerWins} - ${computerWins}`);
    } else if (playerWins < computerWins) {
        console.log(`Player loses with a score of ${playerWins} - ${computerWins}`);
    } else {
        console.log(`Draw with a score of ${playerWins} - ${computerWins}`);
    }
}

const validPlays = ['rock', 'paper', 'scissors'];
playGame();


// ----------------------------- End of File ----------------------------- //
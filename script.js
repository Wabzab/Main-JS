function computerPlay() {
    let selection = Math.floor(Math.random()*3);
    return(validPlays[selection]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return (['Rock loses to paper. Computer wins!', 1]);
        } else if (computerSelection == 'scissors') {
            return (['Rock wins to scissors. Player wins!', 0]);
        } else {
            return (['Rock ties with rock. Draw!', 2]);
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return (['Paper wins to rock. Player wins!', 0])
        } else if (computerSelection == 'scissors') {
            return (['Paper loses to scissors. Computer wins!', 1]);
        } else {
            return (['Paper ties with paper. Draw!', 2]);
        }
    } else {
        if (computerSelection == 'rock') {
            return (['Scissors lose to rock. Computer wins!', 1]);
        } else if (computerSelection == 'paper') {
            return (['Scissors win to paper. Player wins!', 0]);
        } else {
            return (['Scissors tie with scissors. Draw!', 2]);
        }
    }
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
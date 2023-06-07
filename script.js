const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

$('.choices i').click(function() {
    let userChoice = this.id;
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
        userScore++;
    } else {
        result = 'You lose!';
        computerScore++;
    }

    $('#result').text(`You chose ${userChoice}, computer chose ${computerChoice}. ${result}`);
    $('#score').text(`Score: ${userScore} - ${computerScore}`);
});

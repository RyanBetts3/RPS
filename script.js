const choices = ['rock', 'paper', 'scissors'];
const images = document.querySelectorAll('.choices img');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
let userScore = 0;
let computerScore = 0;

images.forEach((img) => {
    img.addEventListener('click', () => {
        let userChoice = img.id;
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

        resultDiv.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
        scoreDiv.textContent = `Score: ${userScore} - ${computerScore}`;
    });
});

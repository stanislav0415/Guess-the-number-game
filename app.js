let randomNumber = Math.floor(Math.random() * 100) + 1;
debugger;
let message = document.getElementById("message");
let playAgainBtn = document.getElementById("tryAgain");
let guessBtn =  document.getElementById('guessBtn');

const guessNumberTries = 5;
let attempts = 0;
let flag = false;

if (randomNumber > 50) {
    flag = true;
}

guessBtn.addEventListener('click', () => {
    let number = Number(document.getElementById("guessInput").value);
    attempts++; 

    if (number === randomNumber) {
        message.textContent = "🎉 Congratulations! You won!";
        guessBtn.hidden = true; 
        playAgainBtn.hidden = false;
        return;
    } else if (randomNumber > 9 && number < 10) {
        message.textContent = "🔢 The number is two digit. Try with a higher number.";
    } else if (number < randomNumber) {
        if (flag) {
            message.textContent =
                "⬆️ Your guess is lower. Try with a number higher than 50.";
        } else {
            message.textContent =
                "⬆️ Your guess is lower. Try with a number lower than 50.";
        }
    } else {
        if (flag) {
            message.textContent =
                "⬇️ Your guess is higher. Try with a number higher than 50.";
        } else {
            message.textContent =
                "⬇️ Your guess is higher. Try with a number lower than 50.";
        }
    }

    if (attempts >= guessNumberTries) {
        debugger;
        message.textContent = `😢 Sorry, you lost! The number was ${randomNumber}.`;
        guessBtn.hidden = true; 
        playAgainBtn.hidden = false;

    }
});
playAgainBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    playAgainBtn.hidden = true;
    guessBtn.hidden = false; 
    message.textContent="";
})

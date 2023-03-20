let roundScore = 0;
let gameOver = false;


const roll = document.getElementById("roll");
const reset = document.getElementById("reset");
const scoreTotal = document.getElementById("scoreTotal");
const resultDisplay = document.getElementById("p1Roll");
const diceImage = document.getElementById("diceImage");


roll.addEventListener("click", function() {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    diceImage.src=`./diceimages/${dice1}.gif`;

    if (!gameOver) {
        if (dice1 === 1) {
            roundScore = 0;
            resultDisplay.innerHTML = "Game Over - You Lose";
            gameOver = true;
            roll.disabled = true;
        } else {
            roundScore += dice1;
            scoreTotal.innerHTML = "Total Score: " + roundScore;
            if (roundScore >= 20) {
                resultDisplay.innerHTML = "You Win!";
                gameOver = true;
                roll.disabled = true;
            }
        }
    }
});


reset.addEventListener("click", function() {
roundScore = 0;
scoreTotal.innerHTML = "Total Score:";
resultDisplay.innerHTML = "";
gameOver = false;
roll.disabled = false;
diceImage.src = "./diceimages/11.gif";
});
function randomNumber() {
    return Math.floor(Math.random() * 6 + 1);
}

var dice1 = randomNumber();
var dice2 = randomNumber();

if (dice1 > dice2) {
    document.querySelector(".announcement h1").textContent = "Player 1 wins!";
}

else if (dice1 < dice2) {
    document.querySelector(".announcement h1").textContent = "player 2 wins!";
}

else {
    document.querySelector(".announcement h1").textContent = "it's a tie!";
}

document.querySelector(".dice-1 img").setAttribute("src", "images/" + dice1 + ".png");
document.querySelector(".dice-2 img").setAttribute("src", ("images/" + dice2 + ".png"));
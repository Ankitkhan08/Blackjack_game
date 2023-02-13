let cards = [];
let hasblackjack = false;
let isAlive = false;
let sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Ankit" ,
  chips: 129
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : $" + player.chips

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard == 1) {
    return 11;
  }
  return randomCard;
}

function startgame() {
  isAlive = true;
  firstNumber = getRandomCard();
  secondNumber = getRandomCard();
  cards.push(firstNumber);
  cards.push(secondNumber);
  sum = firstNumber + secondNumber;
  rendergame();
}

function rendergame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? ";
  } else if (sum === 21) {
    message = "You've got blackjacked!! ";
    hasblackjack = true;
  } else {
    message = "You're out of game ! ";
    isAlive = false;
  }
  messageEl.textContent = message;
  sumEl.textContent = "Sum:" + sum;
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}
function newcard() {
  if (isAlive === true && hasblackjack === false) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    rendergame();
  }
}

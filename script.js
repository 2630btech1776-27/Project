let againBtn = document.querySelector(".again");
let checkBtn = document.querySelector(".check");
let guessNumber = document.querySelector(".number");
let msg = document.querySelector(".message");
let gameScore = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let guessValue = document.querySelector(".guess");
score = 20;
randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);


// Functionally for check button
checkBtn.addEventListener("click", function () {
// 1. want input value in number format
let value = Number(guessValue.value);
// 2.check input field is empty or not
if (!value) {
// 2.1 Show msg enter a number
msg.textContent = "Enter a number!";
} // 3. if random number ==input value
else if (randomNumber === value) {
// 3.1 change background color to green
document.body.style.backgroundColor = "green";
// 3.2 show randomNumber in place of ?
guessNumber.textContent = randomNumber;
// 3.3 Update highscore if current score is greater than highscore
if (score > highscore) {
// 3.3.1 update the dom
highscore.textContent = score;
}
// 3.4 update msg to correct number
msg.textContent = "Correct Number!";

}// 4 if guessValue is less than randomNumber
else if (value < randomNumber) {
// 4.1 decrement the score by 1
score--;
// 4.2 update the score in html
gameScore.textContent = score;
// 4.3 show msg too low!
msg.textContent = "Too low!";
}// 4. 4 if guessValue is greater than randomNumber
else if (value > randomNumber) {
// 4.1 decrement the score by 1
score--;
// 4.2 update the score in html
gameScore.textContent = score;
// 4.3 show msg too high!
msg.textContent = "Too high!";
}
});

// Functionality for again button
againBtn.addEventListener("click", function () {
// 1. change background color of body to black#222
document.body.style.backgroundColor = "#222";
//2. Change the value of guessNumber to ?
guessNumber.textContent = "?";
//3. change msg to start guessing...
msg.textContent = "Start guessing...";
//4. change score value to 20
score = 20;
//5. change the score in the game score in html
gameScore.textContent = score;
//6. Generate a new random number
randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
}); 


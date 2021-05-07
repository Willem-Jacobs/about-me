'use strict';

//system variables needed
let playerScore = 0;
const questions = ['Do I live in Seattle area (Yes/Y or No/N)?', 'Do I live in the United States (Yes/No or Y/N)', 'Do I enjoy coding with JavaScript (Yes/No or Y/N)?', 'Do I currently work for the Port Authority (Yes/No or Y/N)?', 'Am I wanting to return to coding (Yes/No or Y/N)?'];
const correctMessages = ['Correct. I do not live in the Seattle area. Score: ', 'You are correct. I live in the Cayman Islands. Score: ', 'You are correct, I do enjoy coding with JavaScript. I like coding with many different languages. Score: ', 'You are correct, I have been working with the Port Authority for 26 years. Score: ', 'You are correct, I enjoy coding so much that I want to return to doing it full-time. Score: '];
const wrongMessages = ['Sorry, I do not live in the Seattle area. Score: ', 'You are NOT correct!, I live in the Cayman Islands. Score: ', 'You are incorrect. I enjoy coding in JavaScript and other languages as well! Score: ', 'You are incorrect. My entire career has been with the Port Authority for 26 years already. Score: ', 'You are incorrect. My mid-life crises is hitting and want to change to go back to coding which is my passion. Score: '];
const correctAnswers = ['no', 'no', 'yes', 'yes', 'yes'];
const badAnswer = 'Value you entered is not Yes/No or Y/N. Skipping question. Next!';

// get user name store to variable
const userName = prompt('What is your name?');
const lowerCaseName = userName.toLowerCase();

// Check if we have the same name
if (lowerCaseName === 'will' || lowerCaseName === 'willem') {
  alert('Welcome ' + userName + ', we have the same name! Great!');
} else {
  alert('Welcome ' + userName + '!');
}

function askQuesiton2() {
  for (let i = 0; i < questions.length; i++) {
    const answer = prompt(questions[i]).toLowerCase();
    switch (answer) {
    case 'no':
    case 'n':
      if (correctAnswers[i] === 'no') {
        playerScore++;
        alert(correctMessages[i] + playerScore);
      } else {
        alert(wrongMessages[i] + playerScore);
      }
      break;
    case 'yes':
    case 'y':
      if (correctAnswers[i] === 'yes') {
        playerScore++;
        alert(correctMessages[i] + playerScore);
      } else {
        alert(wrongMessages[i] + playerScore);
      }
      break;
    default:
      alert(badAnswer);
    }
  }
}

askQuesiton2();

alert('Thanks for taking my quiz. Hope you learned a little about me ' + userName);

// Question 6
function q6(){
  const playGame = prompt(`${userName}, do you want to play a number guessing game Yes/No or Y/N?`).toLowerCase();

  if (playGame === 'yes' || playGame === 'y') {
    const myNumber = Math.floor(Math.random() * (10 - 1) + 1);
    const attempts = 4;
    let playerGuess = 0;
    alert('Great lets Play my amazing number guesing game!!');
    for (let i = 1; i <= attempts; i++) {
      playerGuess = +prompt(`Attempt #:${i} out of ${attempts}. Guess a number between 1 - 10`);
      if (playerGuess < myNumber) {
        alert('Your guess is too low');
      } else if (playerGuess > myNumber) {
        alert('Your guess is too high');
      } else {
        alert(`You guessed the number correct ${1} attempts. Well done!`);
        playerScore++;
        break;
      }
      // Checking if player already tried 4 times if so, end game with message attempts used and provide your number.
      if (attempts === i) {
        alert(`Too many guesses as you only had ${attempts} attempts avaliable. My number was ${myNumber}! Good luck next time. Score: ${playerScore}`);
      }
    }
  } else {
    alert(`${userName}, too bad you do not want to play my game. Maybe next time.`);
  }
}
q6();

// Question 7
function q7(){
  const playGame = prompt(`${userName}, Want to play my Question Guessing Game - Yes/No or Y/N?`).toLowerCase();

  if (playGame === 'yes' || playGame === 'y') {
    const myAnswers = ['holland', 'curacao', 'finland', 'honduras', 'panama', 'costa rica', 'columbia', 'great britain', 'cuba', 'canada'];
    const attempts = 6;
    let playerGuess = '';
    let found = false;
    alert('Great lets play the question/asnwer guesing game!!');
    outsideLoop:
    for (let i = 1; i <= attempts; i++) {
      playerGuess = prompt(`Attempt #:${i} out of ${attempts}. What is one of the contries I have visited?`).toLowerCase();
      if (!playerGuess) {
        alert(`${userName}, you did not enter an asnwer and have lost a turn! You have ${attempts - i} left. Try again`);
        continue;
      }
      for (let j = 0; j < myAnswers.length; j++) {
        if (playerGuess === myAnswers[j]) {
          playerScore++;
          alert(`You are correct, I have visited ${playerGuess}. Score: ${playerScore}`);
          found = true;
          break outsideLoop;
        }
      }
      if (attempts === i) {
        alert(`Game Over as you had ${i} attempts out of ${attempts}.\nI have visted:\n${myAnswers}.`);
      }
      if (!found) {
        alert(`Your entry ${playerGuess} is not a country I have visited`);
        found = false;
      }
    }
    alert(`I have visited the following countries:\n${myAnswers}.`);
  } else {
    alert(`${userName}, too bad you do not want to play my game. Maybe next time.`);
  }
}
q7();

alert(`${userName}, your final score for all questions is: ${playerScore}`);

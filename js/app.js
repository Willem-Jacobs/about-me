'use strict';

//system variables needed
let playerScore = 0;
let playGame = '';
let questions = ['Do I live in Seattle area (Yes/Y or No/N?', 'Do I live in the United States (Yes/No or Y/N', 'Do I enjoy coding with JavaScript (Yes/No or Y/N)?', 'Do I currently work for the Port Authority (Yes/No or Y/N)?', 'Am I wanting to return to coding (Yes/No or Y/N)?'];
let correctAnswers = ['Correct. I do not live in the Seattle area. Score: ', 'You are correct. I live in the Cayman Islands. Score: ', 'You are correct, I do enjoy coding with JavaScript. I like coding with many different languages. Score: ', 'You are correct, I have been working with the Port Authority for 26 years. Score: ', 'You are correct, I enjoy coding so much that I want to return to doing it full-time. Score: '];
let wrongAnswers = ['Sorry, I do not live in the Seattle area. Score: ', 'You are NOT correct!, I live in the Cayman Islands. Score: ', 'You are incorrect. I enjoy coding in JavaScript and other languages as well! Score: ', 'You are incorrect. My entire career has been with the Port Authority for 26 years already. Score: ', 'You are incorrect. My mid-life crises is hitting and want to change to go back to coding which is my passion. Score: '];
const responseValues = ['yes', 'y', 'no', 'n'];
let defaultWrong = 'Sorry, you did not answer with a yes/no or y/n. Next question now! Score: ';

// get user name store to variable
let userName = prompt('What is your name?');
let lowerCaseName = userName.toLowerCase();

// Check if we have the same name
if (lowerCaseName === 'will' || lowerCaseName === 'willem') {
  // console.log('Welcome ' + userName + ', we have the same name! Great!');
  alert('Welcome ' + userName + ', we have the same name! Great!');
} else {
  //console.log('Welcome ' + userName + '!');
  alert('Welcome ' + userName + '!');
}

// prompt for question 1 and store to variable converted to lower case
function q1(){
  let answerOne = prompt(questions[0]).toLowerCase();
  if (answerOne === responseValues[2] || answerOne === responseValues[3]) {
    // if answer is no (correct)
    playerScore++;
    alert(correctAnswers[0] + playerScore);
  } else if (answerOne === responseValues[0] || answerOne === responseValues[1]) {
    // if answer is yes (wrong)
    alert(wrongAnswers[0] + playerScore);
  } else {
    // other value entered
    alert(defaultWrong + playerScore);
  }
}
q1();

// prompt for question 2 and store to variable converted to lower case
function q2(){
  let answerTwo = prompt(questions[1]).toLowerCase();
  if (answerTwo === responseValues[2] || answerTwo === responseValues[3]) {
    // if answer is no (correct)
    playerScore++;
    alert(correctAnswers[1] + playerScore);
  } else if (answerTwo === responseValues[0] || answerTwo === responseValues[1]) {
    // if answer is yes (wrong)
    alert(wrongAnswers[1] + playerScore);
  } else {
    alert(defaultWrong + playerScore);
  }
}
q2();

// prompt for question 3 and store to variable converted to lower case
function q3(){
  let answerTwo = prompt(questions[2]).toLowerCase();
  if (answerTwo === responseValues[0] || answerTwo === responseValues[1]) {
    // if answer is yes/y (correct)
    playerScore++;
    alert(correctAnswers[2] + playerScore);
  } else if (answerTwo === responseValues[2] || answerTwo === responseValues[3]) {
    // if answer is no/n (wrong)
    alert(wrongAnswers[2] + playerScore);
  } else {
    alert(defaultWrong + playerScore);
  }
}
q3();

// prompt for question 4 and store to variable converted to lower case
function q4(){
  let answerFour = prompt(questions[3]).toLowerCase();
  if (answerFour === responseValues[0] || answerFour === responseValues[1]) {
    // if answer is yes/y (correct)
    playerScore++;
    alert(correctAnswers[3] + playerScore);
  } else if (answerFour === responseValues[2] || answerFour === responseValues[3]) {
    // if answer is no/n (wrong)
    alert(wrongAnswers[3] + playerScore);
  } else {
    alert(defaultWrong + playerScore);
  }
}
q4();

// prompt for question 5 and store to variable converted to lower case
function q5(){
  let answerFive = prompt(questions[4]).toLowerCase();
  if (answerFive === responseValues[0] || answerFive === responseValues[1]) {
    // if answer is yes/y (correct)
    playerScore++;
    alert(correctAnswers[4] + playerScore);
  } else if (answerFive === responseValues[2] || answerFive === responseValues[3]) {
    // if answer is no/n (wrong)
    alert(wrongAnswers[4] + playerScore);
  } else {
    alert(defaultWrong + playerScore);
  }
}
q5();

alert('Thanks for taking my quiz. Hope you learned a little about me ' + userName);

// Question 6
function q6(){
  playGame = prompt(`${userName}, do you want to play a number guessing game Yes/No or Y/N?`).toLowerCase();

  if (playGame === 'yes' || playGame === 'y') {
    // console.log(`Play Game: ${playGame}`);
    let myNumber = Math.floor(Math.random() * (10 - 1) + 1);
    // console.log(myNumber);
    let attempts = 4;
    let playerGuess = 0;
    alert('Great lets Play my amazing number guesing game!!');
    for (let i = 1; i <= attempts; i++) {
      //console.log(`attempts: ${i}`);
      playerGuess = +prompt(`Attempt #:${i} out of ${attempts}. Guess a number between 1 - 10`);
      //console.log(`Number guessed by player: ${playerGuess}`);
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
    alert(`${userName} too bad you do not want to play my game. Maybe next time.`);
  }
}
q6();

// Question 7
function q7(){
  playGame = prompt(`${userName}, Want to play my Question Guessing Game - Yes/No or Y/N?`).toLowerCase();

  if (playGame === 'yes' || playGame === 'y') {
    // console.log(`Play Game: ${playGame}`);
    let myAnswers = ['holland', 'curacao', 'finland', 'honduras', 'panama', 'costa rica', 'columbia', 'great britain', 'cuba', 'canada'];
    let attempts = 6;
    let playerGuess = '';
    let found = false;
    alert('Great lets play the question/asnwer guesing game!!');
    outsideLoop:
    for (let i = 1; i <= attempts; i++) {
      playerGuess = prompt(`Attempt #:${i} out of ${attempts}. What is one of the contries I have visited?`).toLowerCase();
      //console.log(`Player guessed: ${playerGuess}`);
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
    alert(`${userName} too bad you do not want to play my game. Maybe next time.`);
  }
}
q7();

alert(`${userName}, your final score for all questions is: ${playerScore}`);

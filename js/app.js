'use strict';

//system variables needed
let playerScore = 0;
let playGame = '';

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
let answerOne = prompt('Do I live in Seattle (Yes/No or Y/N)?').toLowerCase();

// checks for the answer to answer One
if (answerOne === 'yes' || answerOne === 'y') {
  //console.log('Sorry, I do not live in Seattle');
  alert('Sorry, I do not live in Seattle');
} else if (answerOne === 'no' || answerOne === 'n') {
  //console.log('Correct. I do not live in Seattle');
  playerScore++;
  alert(`Correct. I do not live in Seattle. Score: ${playerScore}`);
} else {
  //console.log('Sorry, you did not answer with a yes/no or y/n. Next question now!');
  alert('Sorry, you did not answer with a yes/no or y/n. Next question now!');
}

// prompt for question 2 and store to variable converted to lower case
let answerTwo = prompt('Do I live in the United States (Yes/No or Y/N)?').toLowerCase();

// checks for the answer to answer One
if (answerTwo === 'yes' || answerTwo === 'y') {
  //console.log('You are not correct! I do live in the Cayman Islands');
  alert('You are NOT correct! I live in the Cayman Islands');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  //console.log('You are correct. I live in the Cayman Islands');
  playerScore++;
  alert(`You are correct. I live in the Cayman Islands. Score: ${playerScore}`);
} else {
  //console.log('Sorry, you did not answer with a yes/no or y/n. Next question now!');
  alert('Sorry, you did not answer with a Yes/No or Y/N. Next question now!');
}

// prompt for question 3 and store to variable converted to lower case
let answerThree = prompt('Do I enjoy coding with JavaScript (Yes/No or Y/N)?').toLowerCase();

// checks for the answer to answer One
if (answerThree === 'yes' || answerThree === 'y') {
  //console.log('You are correct, I do enjoy coding with JavaScript. I like coding with many different languages');
  playerScore++;
  alert(`You are correct, I do enjoy coding with JavaScript. I like coding with many different languages. Score: ${playerScore}`);
} else if (answerThree === 'no' || answerThree === 'n') {
  //console.log('You are incorrect. I enjoy coding in JavaScript and other languages as well!');
  alert('You are incorrect. I enjoy coding in JavaScript and other languages as well!');
} else {
  //console.log('Sorry, you did not answer with a yes/no or y/n. Next question now!');
  alert('Sorry, you did not answer with a Yes/No or Y/N. Next question now!');
}

// prompt for question 4 and store to variable converted to lower case
let answerFour = prompt('Do I currently work for the Port Authority (Yes/No or Y/N)?').toLowerCase();

// checks for the answer to answer One
if (answerFour === 'yes' || answerFour === 'y') {
  //console.log('You are correct, I have been working with the Port Authority for 25 years');
  playerScore++;
  alert(`You are correct, I have been working with the Port Authority for 26 years. Score: ${playerScore}`);
} else if (answerFour === 'no' || answerFour === 'n') {
  //console.log('You are incorrect. My entire career has been with the Port Authority for 26 years already');
  alert('You are incorrect. My entire career has been with the Port Authority for 26 years already');
} else {
  //console.log('Sorry, you did not answer with a yes/no or y/n. Next question now!');
  alert('Sorry, you did not answer with a Yes/No or Y/N. Next question now!');
}

// prompt for question 5 and store to variable converted to lower case
let answerFive = prompt('Am I wanting to return to coding (Yes/No or Y/N)?').toLowerCase();

// checks for the answer to answer One
if (answerFive === 'yes' || answerFive === 'y') {
  //console.log('You are correct, I enjoy coding so much that I want to return to doing it full-time');
  playerScore++;
  alert(`You are correct, I enjoy coding so much that I want to return to doing it full-time. Score: ${playerScore}`);
} else if (answerFive === 'no' || answerFive === 'n') {
  //console.log('You are incorrect. My mid-life crises is hitting and want to change to go back to coding which is my passion');
  alert('You are incorrect. My mid-life crises is hitting and want to change to go back to coding which is my passion');
} else {
  //console.log('Sorry, you did not answer with a yes/no or y/n. Next question now!');
  alert('Sorry, you did not answer with a Yes/No or Y/N. Next question now!');
}

alert('Thanks for taking my quiz. Hope you learned a little about me ' + userName);

// Question 6
playGame = prompt(`${userName}, do you want to play a number guessing game Yes/No or Y/N?`).toLowerCase();

if (playGame === 'yes' || playGame === 'y') {
  let myNumber = Math.floor(Math.random() * (10 - 1) + 1);
  console.log(myNumber);
  let attempts = 4;
  let playerGuess = 0;
  alert('Great lets Play my amazing number guesing game!!');
  for (let i = 1; i <= attempts; i++) {
    //console.log(`attempts: ${i}`);
    playerGuess = prompt(`Attempt #:${i} out of ${attempts}. Guess a number between 1 - 10`);
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

// Question 7
playGame = prompt(`${userName}, Want to play my Question Guessing Game - Yes/No or Y/N?`).toLowerCase();

if (playGame === 'yes' || playGame === 'y') {
  let myAnswers = ['holland', 'curacao', 'finland', 'honduras', 'panama', 'costa rica', 'columbia', 'great britain', 'cuba', 'canada'];
  let attempts = 6;
  let playerGuess = '';
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
        break outsideLoop;
      }
    }
    if (attempts === i) {
      alert(`Game Over as you had ${i} attempts out of ${attempts}.\nI have visted:\n${myAnswers}.`);
    }
  }
  alert(`I have visited the following countries:\n${myAnswers}.`);
} else {
  alert(`${userName} too bad you do not want to play my game. Maybe next time.`);
}

alert(`${userName}, your final score for all questions is: ${playerScore}`);

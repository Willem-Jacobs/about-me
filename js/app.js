'use strict';

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
  alert('Correct. I do not live in Seattle');
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
  alert('You are correct. I live in the Cayman Islands');
} else {
  //console.log('Sorry, you did not answer with a yes/no or y/n. Next question now!');
  alert('Sorry, you did not answer with a Yes/No or Y/N. Next question now!');
}

// prompt for question 3 and store to variable converted to lower case
let answerThree = prompt('Do I enjoy coding with JavaScript (Yes/No or Y/N)?').toLowerCase();

// checks for the answer to answer One
if (answerThree === 'yes' || answerThree === 'y') {
  //console.log('You are correct, I do enjoy coding with JavaScript. I like coding with many different languages');
  alert('You are correct, I do enjoy coding with JavaScript. I like coding with many different languages');
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
  alert('You are correct, I have been working with the Port Authority for 26 years');
} else if (answerFour === 'no' || answerFour === 'n') {
  //console.log('You are incorrect. My entire career has been with the Port Authority for 26 years already');
  alert('You are incorrect. My entire career has been with the Port Authority for 26 years already');
} else {
  //console.log('Sorry, you did not answer with a yes/no or y/n. Next question now!');
  alert('Sorry, you did not answer with a Yes/No or Y/N. Next question now!');
}

// prompt for question 4 and store to variable converted to lower case
let answerFive = prompt('Am I wanting to return to coding (Yes/No or Y/N)?').toLowerCase();

// checks for the answer to answer One
if (answerFive === 'yes' || answerFive === 'y') {
  //console.log('You are correct, I enjoy coding so much that I want to return to doing it full-time');
  alert('You are correct, I enjoy coding so much that I want to return to doing it full-time');
} else if (answerFive === 'no' || answerFive === 'n') {
  //console.log('You are incorrect. My mid-life crises is hitting and want to change to go back to coding which is my passion');
  alert('You are incorrect. My mid-life crises is hitting and want to change to go back to coding which is my passion');
} else {
  //console.log('Sorry, you did not answer with a yes/no or y/n. Next question now!');
  alert('Sorry, you did not answer with a Yes/No or Y/N. Next question now!');
}

alert('Thanks for taking my quiz. Hope you learned a little about me ' + userName);

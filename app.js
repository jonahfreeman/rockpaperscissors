// Call upon the different text fields in the html file

const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');

// add a query selector for all with the class of choiceBtn

const choiceBtn = document.querySelectorAll('#choiceBtn');

// variables which will later be filled by function return values

let player;
let computer;
let result;

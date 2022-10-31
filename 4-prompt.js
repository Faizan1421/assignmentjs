var prompt = require("prompt-sync")();

let name = prompt("What is your Name?");
let age = prompt("What is your Age");
let country = prompt("Where are you from?");

console.log(
  `Your name is ${name}, you're ${age} Years old, and You are from ${country}`
);

// run this command in terminal=> node 4-prompt

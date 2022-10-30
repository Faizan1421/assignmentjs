var prompt = require("prompt-sync")();

let quiz = [
  {
    question: "who is the current prime minister of pakistan?",
    options: ["imran khan", "nawaz shareef", "shahbaz shareef", "Allah Dita"],
    ans: "shahbaz shareef",
  },
  {
    question: "who is the current president of pakistan?",
    options: ["imran khan", "arif alvi", "shahid afridi", "parvez illahi"],
    ans: "arif alvi",
  },
  {
    question: "who is the current captain of pakistan cricket team?",
    options: [
      "shahid afridi",
      "nawaz shareef",
      "babar azam",
      "Muhammad rizwan",
    ],
    ans: "babar azam",
  },
];
let totalScore = [];
let q1 = prompt(`${quiz[0].question} ${quiz[0].options} `);
let final1 =
  q1.toLowerCase() == quiz[0].ans.toLowerCase()
    ? "Correct Answer"
    : "Wrong Answer";
final1 == "Wrong Answer" ? totalScore.push(0) : totalScore.push(1);
console.log(final1);
let q2 = prompt(`${quiz[1].question} ${quiz[1].options} `);
let final2 =
  q2.toLowerCase() == quiz[1].ans.toLowerCase()
    ? "Correct Answer"
    : "Wrong Answer";
final2 == "Wrong Answer" ? totalScore.push(0) : totalScore.push(1);
console.log(final2);
let q3 = prompt(`${quiz[2].question} ${quiz[2].options} `);
let final3 =
  q3.toLowerCase() == quiz[2].ans.toLowerCase()
    ? "Correct Answer"
    : "Wrong Answer";
final3 == "Wrong Answer" ? totalScore.push(0) : totalScore.push(1);
console.log(final3);
console.log(
  `You Scored ${totalScore.reduce((a, b) => a + b, 0)} out of ${
    totalScore.length
  }`
);

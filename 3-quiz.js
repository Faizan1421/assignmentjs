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
for (let i = 0; i < quiz.length; i++) {
  let q = prompt(`${quiz[i].question} ${quiz[0].options} `);
  let final =
    q.toLowerCase() == quiz[i].ans.toLowerCase()
      ? "Correct Answer"
      : "Wrong Answer";
  final == "Wrong Answer" ? totalScore.push(0) : totalScore.push(1);
  console.log(final);
}
console.log(
  `You Scored ${totalScore.reduce((a, b) => a + b, 0)} out of ${
    totalScore.length
  }`
);

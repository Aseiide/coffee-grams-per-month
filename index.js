const { prompt } = require("enquirer");


const question = {
  type: 'input',
  name: "cups",
  message: "あなたは1日に何杯コーヒーを飲みますか"
};

prompt(question)
  .then(answer => console.log('Answer', answer))
  .catch(console.error);

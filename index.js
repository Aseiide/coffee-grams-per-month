const {
  Select
} = require("enquirer");

async function sample() {
  const prompt = new Select({
    name: 'cups',
    message: 'あなたは1日に何杯のコーヒーを飲みますか',
    choices: ['1杯', '2杯', '3杯']
  });

  await prompt
    .run()
    .then(answer => console.log(`${answer}ですね`))
    .catch(console.error);

  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('1回あたりに使うコーヒー豆の量をグラムで入力してください\n', (answer) => {
    console.log(`${answer}gですね`);
    readline.close();
  })

  function calc(cups, grams) {
    amount = cups * grams
    console.log(`一ヶ月に必要なコーヒーの量は約${amount}gです`)
  }
}

sample()
calc(cups, grams)

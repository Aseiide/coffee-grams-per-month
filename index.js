const {
  Select
} = require("enquirer");


const prompt = new Select({
  name: 'cups',
  message: 'あなたは1日に何杯のコーヒーを飲みますか',
  choices: ['1杯', '2杯', '3杯']
});

// 実行完了待ち

prompt
  .run()
  .then(answer => console.log(`${answer}ですね`))
  .catch(console.error);

// 実行完了待ち

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 実行完了待ち

readline.question('1回あたりに使うコーヒー豆の量をグラムで入力してください', (answer) => {
  console.log(`${answer}gですね`);
  readline.close();
})

// 実行完了待ち

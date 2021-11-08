const {
  prompt
} = require('enquirer');

async function sample() {
  const response = await prompt([{
      type: 'input',
      name: 'cups',
      message: 'あなたは1日に何杯のコーヒーを飲みますか。数字を入力してください'
    },
    {
      type: 'input',
      name: 'grams',
      message: '1回あたりに使うコーヒー豆の量をグラム数で入力してください'
    }
  ]);

  amount = response.cups * response.grams
  console.log(`1ヶ月に必要なコーヒー豆の量は約${amount}gです`)
}

sample();

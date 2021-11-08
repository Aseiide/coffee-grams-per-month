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

  if (cups > 10) {
    console.log('コーヒーの飲みすぎです！デカフェも試して量を減らしてみましょう。')
  } else if (4 < cups && cups < 10) {
    console.log('コーヒーの飲みすぎは身体によくありません。もう少し抑えて見てください')
  } else if (cups < 0) {
    console.log('ありえない数値です。正の整数を入力してください')
  } else {
    cups = response.cups
  }
  //   grams = response.grams
  //   amount = cups * grams
  //   console.log(`1ヶ月に必要なコーヒー豆の量は約${amount}gです`)
}

sample();

async function cups() {
  const {
    Select
  } = require('enquirer');

  const response = new Select({
    name: 'cups',
    message: '1日に何杯コーヒーを飲みますか?',
    choices: ['1', '2', '3', '4']
  });

  await response
    .run()
    .then(() => {
      console.log(typeof response.value)
      if (response.value === '4') {
        console.log('コーヒーの飲みすぎはよくありませんよ！減らしましょう。')
      } else {
        console.log(`${response.value}杯ですね`)
      }
    })
    .catch(console.error)

  cups = response.value

  const {
    Input
  } = require('enquirer');

  const res = new Input({
    type: 'input',
    name: 'grams',
    message: '1回あたりに使うコーヒーの量を入力してください',
    initial: 'g'
  });

  await res
    .run()
    .then(() => {
      if (res.value < 10) {
        console.log('1回に使うコーヒーの量が少なすぎます。もう一度入力してください')
        return
      } else if (res.value >= 80) {
        console.log('1回に使うコーヒーの量が多すぎます。もう一度入力してください')
      } else {
        console.log(`${res.value}gですね`)
      }
    })
    .catch(console.error)

  const grams = res.value

  amount = cups * grams
  console.log(`1ヶ月に必要なコーヒーの量は約${amount}gです`)
}

cups();


// async function calc(cups, grams) {
//   cups();
//   grams();
//   amount = cups * grams
//   await console.log(`1ヶ月に必要なコーヒーの量は${amount}gです`)
// }

// calc(cups, grams)

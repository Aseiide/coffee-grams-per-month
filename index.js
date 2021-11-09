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
    .then(answer => console.log(`${answer}杯ですね`))
    .catch(console.error)

  cups = response.value

  const {
    prompt
  } = require('enquirer');

  const res = await prompt({
    type: 'input',
    name: 'grams',
    message: '1回あたりに使うコーヒーの量を入力してください',
    initial: 'g'
  });

  grams = res.grams
  console.log(`${grams}gですね`)

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

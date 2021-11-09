async function main () {
  const { Select } = require('enquirer')

  const choices = new Select({
    name: 'cups',
    message: '1日に何杯コーヒーを飲みますか?',
    choices: ['1', '2', '3', '4']
  })

  await choices
    .run()
    .then(() => {
      if (choices.value === '4') {
        console.log('コーヒーの飲みすぎはよくありませんよ！減らしましょう。')
      } else {
        console.log(`${choices.value}杯ですね`)
        return cups = choices.value
      }
    })
    .catch(console.error)

  const { Input } = require('enquirer')

  const res = new Input({
    type: 'input',
    name: 'grams',
    message: '1回あたりに使うコーヒーの量を入力してください',
    initial: 'g'
  })

  await res
    .run()
    .then(() => {
      if (res.value < 10) {
        console.log('1回に使うコーヒーの量が少なすぎます。もう一度入力してください')
      } else if (res.value >= 80) {
        console.log('1回に使うコーヒーの量が多すぎます。もう一度入力してください')
      } else {
        console.log(`${res.value}gですね`)
        return res.value
      }
    })
    .catch(console.error)
  grams = res.value

  const {
    Confirm
  } = require('enquirer')

  const prompt = new Confirm({
    name: 'question',
    message: 'コーヒーは毎日飲みますか?'
  })

  await prompt
    .run()
    .then(answer => {
      if (answer) {
        return frequency = 1
      } else {
        return frequency = 2
      }
    })
    .catch(console.error)

  amount = cups * grams * 30 / frequency
  if (grams && cups && frequency) {
    console.log(`1ヶ月に必要なコーヒーの量は約${amount}gです`)
  } else {

  }
}

main()

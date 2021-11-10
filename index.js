async function main () {
  const { Select } = require('enquirer')

  const choices = new Select({
    name: 'cups',
    message: '1日に何杯コーヒーを飲みますか?',
    choices: ['1', '2', '3', '4']
  })
  
  const cups = choices.value

  await choices
    .run()
    .then((cups) => {
      if (cups === '4') {
        console.log('コーヒーの飲みすぎはよくありませんよ！減らしましょう。')
      } else {
        console.log(`${cups}杯ですね`)
        console.log(cups)
        return cups
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

  const grams = res.value

  await res
    .run()
    .then((grams) => {
      if (grams < 10) {
        console.log('1回に使うコーヒーの量が少なすぎます。もう一度入力してください')
      } else if (grams >= 80) {
        console.log('1回に使うコーヒーの量が多すぎます。もう一度入力してください')
      } else {
        console.log(`${grams}gですね`)
        return grams
      }
    })
    .catch(console.error)

  const {
    Confirm
  } = require('enquirer')

  const prompt = new Confirm({
    name: 'question',
    message: 'コーヒーは毎日飲みますか?'
  })

  const frequency = null
  const answer = null
  await prompt
    .run()
    .then(answer, frequency => {
      if (answer) {
        frequency = 1
        return frequency
      } else {
        frequency = 2
        return frequency
      }
    })
    .catch(console.error)



  console.log(cups)
  console.log(grams)
  console.log(frequency)
  const amount = cups * grams * 30 / frequency

  console.log(`1ヶ月に必要なコーヒーの量は約${amount}gです`)

}

main()

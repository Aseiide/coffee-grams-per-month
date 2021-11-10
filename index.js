const getNumberOfCups = (cups) => {
  if (cups === '4') {
    console.log('コーヒーの飲みすぎはよくありませんよ！減らしましょう。')
  } else {
    return cups
  }
}

const getWeight = (grams) => {
  if (grams < 10) {
    console.log('1回に使うコーヒーの量が少なすぎます。もう一度入力してください')
    return false
  } else if (grams >= 80) {
    console.log('1回に使うコーヒーの量が多すぎます。もう一度入力してください')
    return false
  } else {
    return grams
  }
}

async function main () {
  const {
    Select
  } = require('enquirer')

  const choices = new Select({
    name: 'cups',
    message: '1日に何杯コーヒーを飲みますか?',
    choices: ['1', '2', '3', '4']
  })

  await choices
    .run()
    .then(getNumberOfCups(choices.value))
    .catch(console.error)

  const {
    Input
  } = require('enquirer')

  if (getNumberOfCups(choices.value)) {
    const res = new Input({
      type: 'input',
      name: 'grams',
      message: '1回あたりに使うコーヒーの量を入力してください',
      initial: 'g'
    })

    await res
      .run()
      .then(getWeight(res.value))
      .catch(console.error)

    const quantity = getNumberOfCups(choices.value) // 杯数
    const grams = getWeight(res.value) // 重さ(g)
    const amount = quantity * grams * 30

    if (quantity && grams) {
      console.log(`1ヶ月に必要なコーヒーの量は約${amount}gです`)
    }
  }
}

main()

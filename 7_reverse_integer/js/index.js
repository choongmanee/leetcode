const reverseInteger = (x) => {
  let number = 0
  let max = Math.pow(2, 31) - 1
  let min = Math.pow(-2, 31)

  while (x !== 0) {
    number = number * 10 + x % 10
    x = Math.trunc(x / 10)
  }

  if (number > max || number < min) {
    return 0
  }

  return number
}

module.exports = reverseInteger
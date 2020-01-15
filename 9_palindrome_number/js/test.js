const isPalindrome = require('./index')

const tests = [
  {
    name: '123',
    args: {
      x: 123,
    },
    want: false,
  },
  {
    name: '-123',
    args: {
      x: -123,
    },
    want: false,
  },
  {
    name: '0',
    args: {
      x: 0,
    },
    want: true,
  },
  {
    name: '120',
    args: {
      x: 120,
    },
    want: false,
  },
  {
    name: '111',
    args: {
      x: 111,
    },
    want: true,
  },
  {
    name: '123321',
    args: {
      x: 123321,
    },
    want: true,
  },
]

const runTest = ({ x }, want) => {
  expect(isPalindrome(x)).toEqual(want)
}

for (let i = 0; i < tests.length; i++) {
  const { name, args, want } = tests[i]

  test(name, () => {
    runTest(args, want)
  })
}


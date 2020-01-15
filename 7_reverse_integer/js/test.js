const reverseInteger = require('./index')

const tests = [
  {
    name: '123',
    args: {
      x: 123,
    },
    want: 321,
  },
  {
    name: '-123',
    args: {
      x: -123,
    },
    want: -321,
  },
  {
    name: '12345678923',
    args: {
      x: 12345678923,
    },
    want: 0,
  },
  {
    name: '120',
    args: {
      x: 120,
    },
    want: 21,
  },
  {
    name: '-12345678923',
    args: {
      x: -12345678923,
    },
    want: 0,
  },
  {
    name: '0',
    args: {
      x: 0,
    },
    want: 0,
  },
]

const runTest = ({ x }, want) => {
  expect(reverseInteger(x)).toEqual(want)
}

for (let i = 0; i < tests.length; i++) {
  const { name, args, want } = tests[i]

  test(name, () => {
    runTest(args, want)
  })
}


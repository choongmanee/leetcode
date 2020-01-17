const func = require('./index')

const tests = [
  {
    name: 'abcd',
    args: {
      x: 'abcd',
    },
    want: 'a',
  },
  {
    name: 'abcddcba',
    args: {
      x: 'abcddcba',
    },
    want: 'abcddcba',
  },
  {
    name: 'abc1221',
    args: {
      x: 'abc1221',
    },
    want: '1221',
  },
  {
    name: 'babad',
    args: {
      x: 'babad',
    },
    want: 'bab',
  },
  {
    name: 'cbbd',
    args: {
      x: 'cbbd',
    },
    want: 'bb',
  },
]

const runTest = ({ x }, want) => {
  expect(func(x)).toEqual(want)
}

for (let i = 0; i < tests.length; i++) {
  const { name, args, want } = tests[i]

  test(name, () => {
    runTest(args, want)
  })
}


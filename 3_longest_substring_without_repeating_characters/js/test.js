const longestSubstring = require('./index')

const tests = [
  {
    name: '0 length',
    args: {
      str: '',
    },
    want: 0,
  },
  {
    name: 'abcabcbb',
    args: {
      str: 'abcabcbb',
    },
    want: 3,
  },
  {
    name: 'bbbbb',
    args: {
      str: 'bbbbb',
    },
    want: 1,
  },
  {
    name: 'pwwkew',
    args: {
      str: 'pwwkew',
    },
    want: 3,
  },
]

const runTest = ({ str }, want) => {
  expect(longestSubstring(str)).toEqual(want)
}

for (let i = 0; i < tests.length; i++) {
  const { name, args, want } = tests[i]

  test(name, () => {
    runTest(args, want)
  })
}


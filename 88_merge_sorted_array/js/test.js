const func = require('./index')

const tests = [
  {
    name: '[1,2,3,0,0,0] vs [2,5,6]',
    args: {
      nums1: [1, 2, 3, 0, 0, 0],
      m: 3,
      nums2: [2, 5, 6],
      n: 3,
    },
    want: [1, 2, 2, 3, 5, 6],
  },
  {
    name: '[-1,0,0,3,3,3,0,0,0] vs [1,2,2]',
    args: {
      nums1: [-1, 0, 0, 3, 3, 3, 0, 0, 0],
      m: 6,
      nums2: [1, 2, 2],
      n: 3,
    },
    want: [-1, 0, 0, 1, 2, 2, 3, 3, 3],
  },
  {
    name: '[0] vs [1]',
    args: {
      nums1: [0],
      m: 0,
      nums2: [1],
      n: 1,
    },
    want: [1],
  },
  {
    name: '[1,0] vs [2]',
    args: {
      nums1: [1, 0],
      m: 1,
      nums2: [2],
      n: 1,
    },
    want: [1, 2],
  },
]

const runTest = ({ nums1, m, nums2, n }, want) => {
  expect(func(nums1, m, nums2, n)).toEqual(want)
}

for (let i = 0; i < tests.length; i++) {
  const { name, args, want } = tests[i]

  test(name, () => {
    runTest(args, want)
  })
}


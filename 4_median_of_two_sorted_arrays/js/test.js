const func = require('./index')

const tests = [
  {
    name: '[1,3,5] vs [2,3,4]',
    args: {
      nums1: [1, 3, 5],
      nums2: [2, 3, 4],
    },
    want: 3,
  },
  {
    name: '[-1] vs [0]',
    args: {
      nums1: [-1],
      nums2: [0],
    },
    want: -0.5,
  },
  {
    name: '[10,20,30,40] vs [5,15,25,35]',
    args: {
      nums1: [10, 20, 30, 40],
      nums2: [5, 15, 25, 35],
    },
    want: 22.5,
  },
  {
    name: '[10,20,30,40,50,60] vs [5]',
    args: {
      nums1: [10, 20, 30, 40, 50, 60],
      nums2: [5],
    },
    want: 30,
  },
  {
    name: '[1,2] vs [3,4]',
    args: {
      nums1: [1, 2],
      nums2: [3, 4],
    },
    want: 2.5,
  },
  {
    name: '[1,2] vs [3,4]',
    args: {
      nums1: [3, 4],
      nums2: [1, 2],
    },
    want: 2.5,
  },
]

const runTest = ({ nums1, nums2 }, want) => {
  expect(func(nums1, nums2)).toEqual(want)
}

for (let i = 0; i < tests.length; i++) {
  const { name, args, want } = tests[i]

  test(name, () => {
    runTest(args, want)
  })
}


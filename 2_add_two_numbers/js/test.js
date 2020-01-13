const addTwoNumbers = require('./index')

function ListNode (val) {
  this.val = val
  this.next = null
}

const ListNodeFactory = (...numbers) => {
  if (numbers.length === 0) {
    return new ListNode()
  }

  let list = new ListNode(numbers[0])
  let worker = list

  for (let i = 1; i < numbers.length; i++) {
    worker.next = new ListNode(numbers[i])

    worker = worker.next
  }

  return list
}

const tests = [
  {
    name: 'addTwoNumbers([2,4,3],[5,6,4]) returns [7,0,8]',
    args: {
      l1: ListNodeFactory(2, 4, 3),
      l2: ListNodeFactory(5, 6, 4),
    },
    want: ListNodeFactory(7, 0, 8),
  },
  {
    name: 'addTwoNumbers([2,4],[1,0,0]) returns [3,4,0]',
    args: {
      l1: ListNodeFactory(2, 4),
      l2: ListNodeFactory(1, 0, 0),
    },
    want: ListNodeFactory(3, 4, 0),
  },
]

const addTwoNumbersTest = ({ l1, l2 }, want) => {
  expect(addTwoNumbers(l1, l2)).toEqual(want)
}

for (let i = 0; i < tests.length; i++) {
  const { name, args, want } = tests[i]

  test(name, () => {
    addTwoNumbersTest(args, want)
  })
}


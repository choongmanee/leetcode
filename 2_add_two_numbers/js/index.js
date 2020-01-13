function ListNode (val) {
  this.val = val
  this.next = null
}

function addTwoNumbers (l1, l2) {
  let container = new ListNode(0)
  let result = container
  let sum = 0

  while (l1 || l2) {
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    result.next = new ListNode(sum % 10)
    result = result.next

    sum = sum > 9 ? 1 : 0
  }

  if (sum) {
    result.next = new ListNode(sum)
  }

  return container.next
}

module.exports = addTwoNumbers
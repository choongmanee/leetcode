package _go

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	// declare a workerList that will be mutated
	// declare l3 that will have the mutations
	// loop through the lists
	//  get sum of the list values if available
	//  carry over 1 if the sum is > 9 and add to next sum
	//	set the current l3's Next a new node as a new Sum node
	//	set the overwrite the l3's value to be the l3's Next value
	//	now containerNodeLists value is the previous containerNodeLists's Next value and its next value is nil again
	// if carryover is 1, add a node to the list with the value 1
	var (
		l3, workerList *ListNode
		carry          int
	)

	l3 = &ListNode{}
	workerList = l3

	for l1 != nil || l2 != nil {
		sum := carry

		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}

		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next

		}
		carry = sum / 10
		sum = sum % 10

		node := &ListNode{
			Val: sum,
		}

		workerList.Next = node
		workerList = workerList.Next
	}

	if carry == 1 {
		workerList.Next = &ListNode{
			Val: carry,
		}
	}

	return l3.Next
}

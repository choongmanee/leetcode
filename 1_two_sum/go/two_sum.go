package _go

func twoSum(nums []int, target int) []int {
	//	declare a number map
	//	loop through numbers slice
	//		if target-value@index exists
	//			return indices of [target-value@index, current index]
	//		map target-value@index: complementary index
	//	return empty map if the loop didn't return

	numMap := make(map[int]int)

	for i, num := range nums {
		if _, ok := numMap[num]; ok {
			return []int{
				numMap[num],
				i,
			}
		}

		numMap[target-num] = i
	}

	return []int{}
}

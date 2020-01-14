package _go

func max(x, y int) int {
	if x > y {
		return x
	}

	return y
}

func longestSubstringWithoutRepeatingCharacters(characters string) int {

	var (
		maxLength int
		start     int
	)

	if len(characters) == 0 {
		return maxLength
	}

	charMap := make(map[string]int)

	for i, char := range characters {
		lastChar := string(char)

		if charMap[lastChar] >= start {
			start = i + 1
		}

		charMap[lastChar] = i

		maxLength = max(maxLength, i-start+1)
	}

	return maxLength
}

package _go

import (
	"math"
)

func reverseInteger(x int) int {
	var (
		number int
	)
	for x != 0 {
		number = number*10 + x%10
		x = x / 10
	}

	if number > math.MaxInt32 || number < -1*math.MaxInt32 {
		return 0
	}

	return number
}

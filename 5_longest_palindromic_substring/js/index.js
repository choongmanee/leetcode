const longestPalindrome = (str) => {
  let start = 0
  let longest = 1

  // start from a character and expand left and right to check if the characters
  // match on the left and right
  const expand = (leftIndex, rightIndex) => {
    // check to see if the left index is not < 0
    // check to see if the right index is not beyond the length of the string
    // check if the value on the left is the same as the value on the right
    while (leftIndex >= 0 && rightIndex < str.length && str[leftIndex] ===
    str[rightIndex]) {
      // length = "aa" would be 1-0 + 1 = 2
      const currentPalindromeLength = rightIndex - leftIndex + 1

      if (currentPalindromeLength > longest) {
        longest = currentPalindromeLength
        start = leftIndex
      }

      leftIndex--
      rightIndex++
    }
  }

  // loop through each character from the start and expand outwards
  for (let i = 0; i < str.length; i++) {
    // odd length. look back and ahead one from current index
    expand(i - 1, i + 1)
    // even length. look ahead one from current index
    expand(i, i + 1)
  }

  return str.slice(start, start + longest)
}

module.exports = longestPalindrome
const longestSubstring = (str) => {
  if (str.length <= 1) {
    return str.length
  }

  const charMap = {}
  let start = 0
  let max = 1

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i]

    // if the index of the current character...
    // reappears and is equal to or greater
    // than the index of the most recent start
    // set the new start to the repeat character's index
    // + 1
    if (charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1
    }

    charMap[currentChar] = i
    max = Math.max(max, i - start + 1)
  }

  return max
}

module.exports = longestSubstring
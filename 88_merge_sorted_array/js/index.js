const merged = (nums1, m, nums2, n) => {
  let i = 0
  let j = 0

  // removes all training values after starting from index of m || n
  nums1.splice(m, nums1.length)
  nums2.splice(n, nums2.length)

  while (j < n) {
    // if the value at nums1 is greater, then insert value at nums2
    // j increases to get the next value in nums2
    // if value at nums1 is undefined, insert remaining values of nums2 per loop
    if (nums1[i] > nums2[j] || nums1[i] === undefined) {
      nums1.splice(i, 0, nums2[j])
      j++
    }

    // increase i whether a new value was inserted or not
    i++
  }

  return nums1
}

module.exports = merged
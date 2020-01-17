// learned from: https://www.youtube.com/watch?v=LPFhl65R7

const findMedianSortedArrays = (nums1, nums2) => {
  let firstLength = nums1.length
  let secondLength = nums2.length
  if (firstLength === 1 && secondLength === 1) return (nums1[0] + nums2[0]) / 2

  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1)

  }
  let start = 0
  let end = firstLength

//  get partitions of both lists
//  nums1 partition = floor(nums1.length/2)
//  nums2 partition = floor(nums1.length + nums2.length + 1)/2 - nums1 partition
  while (start <= end) {
    let firstPartitionLength = Math.trunc((start + end) / 2)
    let secondPartitionLength = Math.trunc(
      (firstLength + secondLength + 1) / 2) -
      firstPartitionLength

    // maxFirstLeft
    // if firstPartitionLength === 0 ? -infinity : nums1 partition's left's highest value
    // minFirstRight
    // if firstPartitionLength === 0 ? infinity : nums1 partition's left's highest value
    maxFirstLeft = firstPartitionLength === 0
      ? Number.NEGATIVE_INFINITY
      : nums1[firstPartitionLength - 1]
    minFirstRight = firstPartitionLength === firstLength
      ? Number.POSITIVE_INFINITY
      : nums1[firstPartitionLength]

    // maxSecondLeft
    // if secondPartitionLength === 0 ? -infinity : nums2 partition's left's highest value
    maxSecondLeft = secondPartitionLength === 0
      ? Number.NEGATIVE_INFINITY
      : nums2[secondPartitionLength - 1]
    minSecondRight = secondPartitionLength === secondLength
      ? Number.POSITIVE_INFINITY
      : nums2[secondPartitionLength]

    if (maxFirstLeft <= minSecondRight && maxSecondLeft <= minFirstRight) {
      const max = Math.max(maxFirstLeft, maxSecondLeft)

      if ((firstLength + secondLength) % 2 === 0) {
        return (max + Math.min(minSecondRight, minFirstRight)) / 2
      }

      return max
    } else if (maxFirstLeft > minSecondRight) {
      end = firstPartitionLength - 1
    } else {
      start = firstPartitionLength + 1
    }
  }
}

module.exports = findMedianSortedArrays
function findRotationCount(arr, lowIdx = 0, highIdx = arr.length - 1) {
    // Base case 1: If the array is not rotated (high index is smaller than low index), return 0
    if (highIdx < lowIdx) return 0;

    // Base case 2: If there is only one element left, return its index (lowIdx or highIdx since they are the same)
    if (highIdx === lowIdx) return lowIdx;

    // Find the middle index of the current segment
    let middleIdx = Math.floor((lowIdx + highIdx) / 2);

    // Check if the element at middleIdx+1 is smaller than middleIdx, which means the rotation point is at middleIdx + 1
    if (middleIdx < highIdx && arr[middleIdx + 1] < arr[middleIdx])
        return middleIdx + 1;

    // Check if the middle element is smaller than the previous one (this means the middle is the rotation point)
    if (middleIdx > lowIdx && arr[middleIdx] < arr[middleIdx - 1])
        return middleIdx;

    // If the right half is sorted, the rotation point must be in the left half (search in the left half)
    if (arr[highIdx] > arr[middleIdx])
        return findRotationCount(arr, lowIdx, middleIdx - 1);

    // Otherwise, search in the right half (the rotation point is to the right of middleIdx)
    return findRotationCount(arr, middleIdx + 1, highIdx);
}

module.exports = findRotationCount;

function findFloor(arr, val, lowIdx = 0, highIdx = arr.length - 1) {
    // This function finds the floor of a given value `val` in a sorted array `arr`.
    // The floor of a value is the largest element in the array that is less than or equal to the value.
    // If no such element exists, the function returns -1.

    // if lowIdx is greater than highIdx, it means we've exhausted the search and didn't find a floor.
    if (lowIdx > highIdx) return -1;

    // If `val` is greater than or equal to the highest value in the array, return the highest value.
    if (val >= arr[highIdx]) return arr[highIdx];

    // Calculate the middle index of the current search range.
    let middleIdx = Math.floor((lowIdx + highIdx) / 2);

    // If the middle value is exactly equal to `val`, return that value.
    if (arr[middleIdx] === val) return arr[middleIdx];

    // If the value is between the previous element and the middle element,
    // the previous element is the floor of `val`.
    if (middleIdx > 0 && arr[middleIdx - 1] <= val && val < arr[middleIdx]) {
        return arr[middleIdx - 1];
    }

    // If the value is less than the middle value, search the left half of the array.
    if (val < arr[middleIdx]) {
        return findFloor(arr, val, lowIdx, middleIdx - 1);
    }

    // Otherwise, search the right half of the array.
    return findFloor(arr, val, middleIdx + 1, highIdx);
}

module.exports = findFloor;  // Export the function so it can be used in other files (e.g., for testing).

function sortedFrequency(arr, val) {
    // Find the first index of the value in the array
    let firstIdx = findFirst(arr, val);

    // If the value is not found, return -1
    if (firstIdx === -1) return firstIdx;

    // Find the last index of the value in the array
    let lastIdx = findLast(arr, val);

    // Return the frequency of the value by calculating the difference
    // between the last and first index, then add 1 (to include both ends)
    return lastIdx - firstIdx + 1;
}

function findFirst(arr, val, lowIdx = 0, highIdx = arr.length - 1) {
    // Check if the high index is greater than or equal to the low index
    if (highIdx >= lowIdx) {
        // Calculate the middle index of the current search range
        let middleIdx = Math.floor((lowIdx + highIdx) / 2);

        // Check if the middle element is the first occurrence of the value
        // This checks two conditions:
        // 1. Is it the first element (middleIdx === 0) or is the previous element not equal to the value?
        // 2. Is the middle element equal to the value?
        if ((middleIdx === 0 || val > arr[middleIdx - 1]) && arr[middleIdx] === val) {
            return middleIdx; // Found the first occurrence, return its index
        } 
        // If the value is greater than the middle element, search the right half
        else if (val > arr[middleIdx]) {
            return findFirst(arr, val, middleIdx + 1, highIdx);
        } 
        // If the value is less than or equal to the middle element, search the left half
        else {
            return findFirst(arr, val, lowIdx, middleIdx - 1);
        }
    }
    // If the value is not found, return -1
    return -1;
}

function findLast(arr, val, lowIdx = 0, highIdx = arr.length - 1) {
    // Check if the high index is greater than or equal to the low index
    if (highIdx >= lowIdx) {
        // Calculate the middle index of the current search range
        let middleIdx = Math.floor((lowIdx + highIdx) / 2);

        // Check if the middle element is the last occurrence of the value
        // This checks two conditions:
        // 1. Is it the last element (middleIdx === arr.length - 1) or is the next element not equal to the value?
        // 2. Is the middle element equal to the value?
        if ((middleIdx === arr.length - 1 || val < arr[middleIdx + 1]) && arr[middleIdx] === val) {
            return middleIdx; // Found the last occurrence, return its index
        } 
        // If the value is less than the middle element, search the left half
        else if (val < arr[middleIdx]) {
            return findLast(arr, val, lowIdx, middleIdx - 1);
        } 
        // If the value is greater than or equal to the middle element, search the right half
        else {
            return findLast(arr, val, middleIdx + 1, highIdx);
        }
    }
    // If the value is not found, return -1
    return -1;
}

module.exports = sortedFrequency  // Export the function so it can be used in other files (e.g., for testing).
function countZeroes(arr) {
    // This function takes in a sorted array `arr` which contains 1's followed by 0's.
    // It uses the helper function `findFirst` to locate the first occurrence of a 0.
    // If no 0 is found, it returns 0. Otherwise, it calculates how many 0's are in the array.
    
    let firstZero = findFirst(arr);  // Find the index of the first 0 in the array.
    if (firstZero === -1) return 0;  // If no 0 is found (findFirst returns -1), return 0.
  
    return arr.length - firstZero;   // The number of 0's is the total array length minus the index of the first 0.
}
  
function findFirst(arr, low = 0, high = arr.length - 1) {
    // This function implements a binary search to find the first occurrence of a 0 in the sorted array.
    // It uses recursion to divide the array in half and search efficiently.
    
    if (high >= low) {  // Continue searching as long as there are elements between `low` and `high`.
        let mid = low + Math.floor((high - low) / 2);  // Find the middle index of the current portion of the array.

        // Check if the current element at `mid` is the first 0.
        // Conditions: Either `mid` is the first element or the element before `mid` is 1 and `arr[mid]` is 0.
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return mid;  // Return the index of the first 0.
        } 
        
        // If `arr[mid]` is 1, search in the right half (elements after `mid`).
        else if (arr[mid] === 1) {
            return findFirst(arr, mid + 1, high);
        }
        
        // Otherwise, search in the left half (elements before `mid`).
        return findFirst(arr, low, mid - 1);
    }
    
    return -1;  // If no 0 is found, return -1.
}
  
module.exports = countZeroes;  // Export the `countZeroes` function so it can be used in other files or tests.
function findRotatedIndex(array, num) {
    // Find the pivot point where the rotation happened in the array
    var pivot = findPivot(array);

    // If the pivot is greater than 0 (meaning the array is rotated) and num is within
    // the range from the start of the array to the element before the pivot, 
    // perform binary search on the left side of the pivot.
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
      return binarySearch(array, num, 0, pivot - 1);
    } else {
      // Otherwise, perform binary search on the right side of the pivot (the rotated part).
      return binarySearch(array, num, pivot, array.length - 1);
    }
}

function binarySearch(array, num, start, end) {
    // If the array is empty, return -1 (not found)
    if (array.length === 0) return -1;

    // If num is out of bounds (less than the start or greater than the end of the search range), return -1
    if (num < array[start] || num > array[end]) return -1;

    // Perform binary search to find the target number within the search range (start to end)
    while (start <= end) {
      var mid = Math.floor((start + end) / 2); // Calculate the middle index
      if (array[mid] === num) {
        return mid; // If the number is found, return its index
      } else if (num < array[mid]) {
        // If num is smaller than the middle value, search the left half
        end = mid - 1;
      } else {
        // If num is larger than the middle value, search the right half
        start = mid + 1;
      }
    }
    return -1; // If num is not found, return -1
}

function findPivot(arr) {
    // If array has only one element or if the array is not rotated, return 0 (no rotation)
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;

    var start = 0;
    var end = arr.length - 1;

    // Binary search to find the pivot (the point where the array rotation occurred)
    while (start <= end) {
      var mid = Math.floor((start + end) / 2); // Calculate the middle index

      // If the middle element is greater than the next one, the pivot is mid + 1
      if (arr[mid] > arr[mid + 1]) return mid + 1;

      // If the left half (start to mid) is sorted, search the right half
      else if (arr[start] <= arr[mid]) {
        start = mid + 1;
      } 
      // Otherwise, search the left half
      else {
        end = mid - 1;
      }
    }
}

module.exports = findRotatedIndex;

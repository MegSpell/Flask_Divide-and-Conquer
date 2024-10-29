// Import the function 'findRotatedIndex' from the file where it is defined
const findRotatedIndex = require("./find-rotated-index")

// Grouping related tests for the 'findRotatedIndex' function
describe("#findRotatedIndex", function() {
  
  // This test checks the function's behavior in returning the correct index of a number in a rotated sorted array
  it("returns the correct index", function() {
    
    // Test case: searching for the index of 4 in the rotated array [3, 4, 1, 2]
    // The number 4 is at index 1, so the expected output is 1
    expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1);

    // Test case: searching for the index of 8 in the rotated array [6, 7, 8, 9, 1, 2, 3, 4]
    // The number 8 is at index 2, so the expected output is 2
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2);

    // Test case: searching for the index of 3 in the rotated array [6, 7, 8, 9, 1, 2, 3, 4]
    // The number 3 is at index 6, so the expected output is 6
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6);

    // Test case: searching for the index of 14 in the rotated array [37, 44, 66, 102, 10, 22]
    // The number 14 is not in the array, so the expected output is -1
    expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1);

    // Test case: searching for the index of 12 in the rotated array [6, 7, 8, 9, 1, 2, 3, 4]
    // The number 12 is not in the array, so the expected output is -1
    expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1);
  })
})

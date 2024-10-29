// Import the function 'findRotationCount' from the file where it is defined
const findRotationCount = require("./find-rotation-count")

// Grouping related tests for the 'findRotationCount' function
describe("#findRotationCount", function () {
  
  // This test checks the function's behavior in returning the number of rotations in a rotated sorted array
  it("returns the number of rotations", function () {
    
    // Test case: input array [15, 18, 2, 3, 6, 12]
    // The array has been rotated 2 times (from [15, 18, 2, 3, 6, 12] to [2, 3, 6, 12, 15, 18])
    // The expected output is 2
    expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2);

    // Test case: input array [7, 9, 11, 12, 5]
    // The array has been rotated 4 times (from [7, 9, 11, 12, 5] to [5, 7, 9, 11, 12])
    // The expected output is 4
    expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4);

    // Test case: input array [7, 9, 11, 12, 15]
    // The array is not rotated (it's already in ascending order)
    // The expected output is 0
    expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0);
  })
})

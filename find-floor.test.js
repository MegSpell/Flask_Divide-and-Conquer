// Import the function 'findFloor' from the file where it is defined
const findFloor = require("./find-floor")

// Grouping related tests for the 'findFloor' function
describe("#findFloor", function() {
  
  // This test checks the function's behavior in returning the floor value or -1
  it("returns the floor or -1", function() {
    
    // Test case: searching for the floor of 5 in the array
    // The largest number less than or equal to 5 is 2, so the expected output is 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2); // 2

    // Test case: searching for the floor of 20 in the array
    // Since 20 is greater than all elements in the array, the largest number is 19, so the expected output is 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19); // 19

    // Test case: searching for the floor of 0 in the array
    // There is no element less than or equal to 0 in the array, so the expected output is -1
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1); // -1
  })
})

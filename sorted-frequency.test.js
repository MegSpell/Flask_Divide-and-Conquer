// Import the sortedFrequency function from the sorted-frequency module
const sortedFrequency = require("./sorted-frequency");

// Describe the test suite for the sortedFrequency function
describe("#sortedFrequency", function() {
  // Define a specific test case for checking frequency return values
  it("returns the frequency", function() {
    // Test case 1: Check frequency of the value 2 in the array
    // The expected output is 4 because 2 appears four times
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4);

    // Test case 2: Check frequency of the value 3 in the array
    // The expected output is 1 because 3 appears once
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1);

    // Test case 3: Check frequency of the value 1 in the array
    // The expected output is 2 because 1 appears twice
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2);

    // Test case 4: Check frequency of the value 4 in the array
    // The expected output is -1 because 4 does not appear in the array
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1);
  });
});

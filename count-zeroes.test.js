const countZeroes = require("./count-zeroes");  // Import the `countZeroes` function from the "count-zeroes" module.

describe("#countZeroes", function() {
  // The `describe` block is a test that groups related tests for the `countZeroes` function.
  // The string "#countZeroes" is just a label to describe what is being tested (in this case, the function `countZeroes`).

  it("counts the number of zeroes", function() {
    // The `it` block represents an individual test case, with the description "counts the number of zeroes".
    // This is testing the behavior of the `countZeroes` function.

    expect(countZeroes([1, 1, 1, 1, 0, 0])).toBe(2);
    // This test checks that `countZeroes` correctly counts 2 zeroes in the array `[1, 1, 1, 1, 0, 0]`.
    
    expect(countZeroes([1, 0, 0, 0, 0])).toBe(4);
    // This test checks that `countZeroes` correctly counts 4 zeroes in the array `[1, 0, 0, 0, 0]`.

    expect(countZeroes([0, 0, 0])).toBe(3);
    // This test checks that `countZeroes` correctly counts 3 zeroes in the array `[0, 0, 0]`.

    expect(countZeroes([1, 1, 1, 1])).toBe(0);
    // This test checks that `countZeroes` returns 0 when there are no zeroes in the array `[1, 1, 1, 1]`.
  });
});



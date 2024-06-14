function twoSum(nums, target) {
  // Create a dictionary to store the numbers and their indices
  let numToIndex = {};

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // Calculate the complement
    let complement = target - num;

    // Check if the complement is in the dictionary
    if (numToIndex.hasOwnProperty(complement)) {
      // If found, return the indices
      return [numToIndex[complement], i];
    }

    // If not found, add the number and its index to the dictionary
    numToIndex[num] = i;
  }

  // If no solution is found, return an empty array (though the problem guarantees a solution)
  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));  // Output: [0, 1]


function addNumbers(nums, target) {
  let numToIndex = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;

    if (numToIndex.hasOwnProperty(complement)) {
      return [numToIndex[complement], i];
    }

    numToIndex[num] = i;
  }
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(addNumbers(nums, target));


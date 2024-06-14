const nums = [2, 7, 11, 15];
const target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]} 
 */
function twoSum(nums, target) {
  const seen = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    return [seen[complement], i];
  }
    seen[nums[i]] = i;

    return [];
}

const result = twoSum(nums, target);
console.log(result);

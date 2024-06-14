
function addNumbers(a, b) {
    return ( a+b );

}

console.log(addNumbers(10, 20)); 


const nums = [2, 7, 11, 15];
const target = 9;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


const twoSum = function(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
console.log(twoSum(nums, target));

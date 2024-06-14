
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function(nums, target) {
    const numMap = {};
    
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (numMap[complement] !== undefined) {
        return [numMap[complement], i];
      }
      numMap[nums[i]] = i;
    }
    
    return []; 
  };
  



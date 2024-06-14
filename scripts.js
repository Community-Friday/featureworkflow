<<<<<<< HEAD

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
  


=======
// Add your code to add 2 numbers together
function addNumbers(a, b) {
  return a + b +2;
}

console.log(addNumbers(10, 20)); // Expected output: 30
>>>>>>> d38838c7c5a8a5d59cd0375ff5a2d00876351f2b

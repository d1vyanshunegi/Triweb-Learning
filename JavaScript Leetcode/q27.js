// 2824. Count Pairs Whose Sum is Less than Target
// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.

var countPairs = function(nums, target) {
    nums.sort((a, b) => a-b); 
    let count = 0; 
    let left = 0; 
    let right = nums.length-1; 
    while(left < right){ 
        if(nums[left] + nums[right] < target){ 
            count += right-left; 
            left++; 
        }
        else{ 
            right--; 
        }
    }
    return count; 
};
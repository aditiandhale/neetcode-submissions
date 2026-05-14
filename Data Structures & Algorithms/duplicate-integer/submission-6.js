class Solution {
    hasDuplicate(nums) {
       if(!nums || nums.length <= 1) return false;

       nums.sort((a,b) => a-b);

       for (let i = 1; i<nums.length; i++){
        if(nums[i] === nums[i-1]) return true;
       }
       return false;
    }
}
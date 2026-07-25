class Solution {
    hasDuplicate(nums) {
        // Brute Approach - O(n^2) ...
        // for(let i=0; i<nums.length; i++){
        //     for(let j=0; j<nums.length; j++){
        //         if(nums[i]===nums[j] && i!==j){
        //             return true;
        //         }
        //     }
        // }
        // return false;

        // O(n) - Through MAP METHOD...
        // const map = new Map();
        // for(let i=0;i<nums.length;i++){
        //     if(map.has(nums[i])){
        //         return true;
        //     }
        //     map.set(nums[i], true);
        // }
        // return false;

        // Through SET METHOD - O(n) ...
        const set = new Set();
        for(let i=0;i<nums.length; i++){
            if(set.has(nums[i])) return true;
            set.add(nums[i]);
        }
        return false;
    }
}

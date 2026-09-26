class Solution {
    twoSum(nums, target) {
        // brute approach... O(n^2)
        // for(let i=0; i<nums.length; i++){
        //     for(let j=1; j<nums.length; j++){
        //         if(nums[i]+nums[j]== target){
        //             return [i,j];
        //         }
        //     }
        // }
        // Optimal Approach - O(n) - We stored index as value of map
        let map = new Map();
        for(let i=0; i<nums.length; i++){
            let compliment = target-nums[i];
            if(map.has(compliment)){
                return [map.get(compliment), i];
            }
            map.set(nums[i], i);
        }
        return [];
    }
}

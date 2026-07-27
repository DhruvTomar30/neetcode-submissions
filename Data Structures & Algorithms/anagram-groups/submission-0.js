class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(!strs || strs.length===1) return [strs];
        let map={};
        for(let i=0; i<strs.length; i++){
            let sortedStrings= strs[i].split('').sort().join('');
            if(!map[sortedStrings]){
                map[sortedStrings] = [strs[i]];
            }else{
                map[sortedStrings].push(strs[i]);
            }
        }
        return Object.values(map);
    }
}

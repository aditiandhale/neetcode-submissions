class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = {};

        for (let i = 0; i < strs.length; i++) {

            let sortedStrings =
                strs[i].split('').sort().join('');

            // Create array if key not present
            if (!map[sortedStrings]) {
                map[sortedStrings] = [];
            }

            // Correct push syntax
            map[sortedStrings].push(strs[i]);
        }

        return Object.values(map);
    }
}
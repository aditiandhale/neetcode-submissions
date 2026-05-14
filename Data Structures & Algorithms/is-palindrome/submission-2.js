class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
        let str = "";
        for(let i=0; i<s.length;i++){
            let ch = s[i];
            if (
                (ch >= 'a' && ch <= "z") ||
                (ch >= "0" && ch <= "9")
            ){
                str = str + ch;
            }
        }

        let reversed = "";
        for(let i=str.length-1; i>=0; i--){
            reversed = reversed+str[i];
        }

        return str === reversed;
    }
}
